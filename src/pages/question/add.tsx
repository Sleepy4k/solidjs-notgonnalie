import { Auth } from '@contexts';
import { EDebugType } from '@enums';
import { MainLayout } from '@layouts';
import { CSRFService } from '@services';
import { questionModel } from '@models';
import { useNavigate } from '@solidjs/router';
import { createSignal, Show } from 'solid-js';
import { println, formValidator } from '@utils';
import { TextInput, TextError, SafeForm } from '@components';
import { createFormGroup, createFormControl } from 'solid-forms';

export default function AddQuestion() {
  const navigate = useNavigate();
  const { user } = Auth.useAuth();
  const [loading, setLoading] = createSignal<boolean>(false);
  const group = createFormGroup({
    safe_form: createFormControl(false),
    question: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
  });

  const handleValidation = () => {
    if (group.isSubmitted) {
      println('System', 'Formulir sudah dikirimkan', EDebugType.ERROR);
      return;
    }

    if (!group.isValid) {
      println('System', 'Silahkan isi semua formulir', EDebugType.ERROR);
      return;
    }

    if (!CSRFService.validateToken()) {
      group.controls.safe_form.setErrors({ invalid: 'csrf token tidak valid' });
      return;
    } else {
      group.controls.safe_form.setErrors(null);
    }

    group.markSubmitted(true);

    setLoading(true);
    handleSubmit();
  };

  const handleSubmit = async () => {
    const result = await questionModel.createQuestion({
      uid: user()?.id?.toString() || '0',
      question: group.value.question || '',
    });

    group.markSubmitted(false);
    setLoading(false);

    if (result) {
      println('System', 'Berhasil menambahkan pertanyaan', EDebugType.SUCCESS);
      navigate('/questions', { replace: true });
    } else {
      println('System', 'Gagal menambahkan pertanyaan', EDebugType.ERROR);
    }
  };

  return (
    <SafeForm regenerate={!!group.controls.safe_form.errors}>
      <MainLayout title='Add Question'>
        <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
          <div class="flex flex-col gap-4">
            {/* Make form add question */}
            <div class="card shadow-2xl">
              <div class="card-body">
                <h2 class="card-title">Add Question</h2>
                <div class='divider divider-lg'></div>
                {/* Make form to add question */}
                <form class="form-control flex flex-col items-stretch gap-3">
                  <label class="input input-bordered min-w-full flex items-center gap-2">
                    <TextInput
                      type='text'
                      name='question'
                      disabled={loading()}
                      placeholder='Question'
                      control={group.controls.question}
                      class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
                    />
                  </label>
                  <TextError name='Question' control={group.controls.question} />
                  <div class="flex items-center justify-between" />
                  <div class="divider text-sm" />
                  <div class='flex justify-center'>
                    <button
                      type='submit'
                      disabled={loading()}
                      onClick={handleValidation}
                      class="btn btn-block btn-primary w-[25%]"
                    >
                      <Show when={!loading()}>
                        <span>Tambah</span>
                      </Show>

                      <Show when={loading()}>
                        <span class="loading loading-dots loading-lg" />
                      </Show>
                    </button>
                  </div>
                </form>

                <div class="w-full flex justify-center items-center gap-4 mt-2">
                  <button
                    type='button'
                    disabled={loading()}
                    onClick={() => navigate('/questions')}
                    class="btn btn-block dark:btn-neutral w-[25%]"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </SafeForm>
  );
}