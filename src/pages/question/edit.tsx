import { Auth } from '@contexts';
import { EDebugType } from '@enums';
import { MainLayout } from '@layouts';
import { CSRFService } from '@services';
import { questionModel } from '@models';
import { SweetAlertResult } from 'sweetalert2';
import { createSignal, onMount, Show } from 'solid-js';
import { println, formValidator, alert } from '@utils';
import { createFormGroup, createFormControl } from 'solid-forms';
import { TextInput, TextError, SafeForm, SwalConfirm } from '@components';
import { BeforeLeaveEventArgs, useBeforeLeave, useLocation, useNavigate } from '@solidjs/router';

interface IQuestionEditLocation {
  id: string;
  uid: string;
  question: string;
}

export default function EditQuestion() {
  const navigate = useNavigate();
  const { isLogged } = Auth.useAuth();
  const { state } = useLocation<IQuestionEditLocation>();
  const [cleared, setCleared] = createSignal<boolean>(false);
  const [loading, setLoading] = createSignal<boolean>(false);
  const group = createFormGroup({
    safe_form: createFormControl(false),
    question: createFormControl(state?.question || '', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
  });

  onMount(() => {
    if (!isLogged()) navigate('/404', { replace: true });
    if (!state || state == null || state == undefined) navigate('/question', { replace: true });
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
    const result = await questionModel.updateQuestion(state?.id || '', {
      uid: state?.uid || '0',
      question: group.value.question || '',
    });

    group.markSubmitted(false);
    setLoading(false);

    if (result.id != 'NaN') {
      setCleared(true);
      println('System', 'Berhasil mengubah pertanyaan', EDebugType.SUCCESS);
      navigate('/question', { replace: true });
    } else {
      println('System', 'Gagal mengubah pertanyaan', EDebugType.ERROR);
    }
  };

  useBeforeLeave((e: BeforeLeaveEventArgs) => {
    if (group.isDirty && !e.defaultPrevented && !group.controls.safe_form.errors && !cleared()) {
      e.preventDefault();
      setTimeout(() => {
        alert.fire({
          title: 'Konfirmasi',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Ya',
          cancelButtonText: 'Tidak',
          html: SwalConfirm() as HTMLElement
        }).then((result: SweetAlertResult) => {
          if (result.isConfirmed) e.retry(true);
        });
      }, 100);
    }
  });

  return (
    <SafeForm regenerate={!!group.controls.safe_form.errors}>
      <MainLayout title='Ubah Pertanyaan'>
        <div class="w-full h-screen xl:h-auto xl:w-[30%] 2xl:w-[25%] 3xl:w-[20%] px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
          <div class="flex flex-col gap-4">
            {/* Make form add question */}
            <div class="card shadow-2xl">
              <div class="card-body">
                <h2 class="card-title">Ubah Pertanyaan</h2>
                <div class='divider divider-lg'></div>
                {/* Make form to add question */}
                <form class="form-control flex flex-col items-stretch gap-3">
                  <label class="input-bordered">
                    <TextInput
                      type='textarea'
                      name='question'
                      disabled={loading()}
                      placeholder='Pertanyaan Kamu'
                      control={group.controls.question}
                      class='grow input input-bordered h-auto pl-1 pr-0'
                    />
                  </label>
                  <TextError name='Pertanyaan kamu' control={group.controls.question} />
                  <div class="flex items-center justify-between" />
                  <div class="divider text-sm" />
                  <div class='flex justify-center gap-5'>
                    <button
                      type='button'
                      disabled={loading()}
                      onClick={() => navigate('/question')}
                      class="btn btn-block dark:btn-neutral w-[25%]"
                    >
                      Kembali
                    </button>
                    <button
                      type='submit'
                      disabled={loading()}
                      onClick={handleValidation}
                      class="btn btn-block btn-primary w-[25%]"
                    >
                      <Show when={!loading()}>
                        <span>Ubah</span>
                      </Show>

                      <Show when={loading()}>
                        <span class="loading loading-dots loading-lg" />
                      </Show>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </SafeForm>
  );
}