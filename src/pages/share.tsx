import { EDebugType } from '@enums';
import { AuthLayout } from '@layouts';
import { CSRFService } from '@services';
import { formValidator, println } from '@utils';
import { answerModel, questionModel } from '@models';
import { Show, createSignal, onMount } from 'solid-js';
import { useNavigate, useParams } from '@solidjs/router';
import { TextInput, TextError, SafeForm } from '@components';
import { createFormGroup, createFormControl } from 'solid-forms';

export default function Share() {
  const params = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = createSignal<string>('');
  const [loading, setLoading] = createSignal<boolean>(false);
  const [submitted, setSubmitted] = createSignal<boolean>(false);
  const group = createFormGroup({
    safe_form: createFormControl(false),
    answer: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    })
  });

  onMount(async () => {
    if (!params || params == null || params == undefined) {
      println('System', 'Parameter tidak valid', EDebugType.ERROR);
      navigate('/', { replace: true });
    }

    await questionModel.findQuestion(params.questid).then((data) => {
      if (!data || data.id == 'NaN') {
        println('System', 'Pertanyaan tidak ditemukan', EDebugType.ERROR);
        navigate('/', { replace: true });
        return;
      }

      if (data.uid != params.uid) {
        println('System', 'Pertanyaan tidak ditemukan', EDebugType.ERROR);
        navigate('/', { replace: true });
        return;
      }

      setQuestion(data.question);
    });
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
    const result = await answerModel.createAnswer({
      questId: params.questid,
      answer: group.value.answer || '',
    });

    group.markSubmitted(false);
    setLoading(false);

    if (result) {
      println('System', 'Berhasil menambahkan jawaban', EDebugType.SUCCESS);
      setSubmitted(true);
    } else {
      println('System', 'Gagal menambahkan jawaban', EDebugType.ERROR);
    }
  };

  return (
    <SafeForm regenerate={!!group.controls.safe_form.errors}>
      <AuthLayout disabled={loading()} title='Kirim Pesan'>
        <Show when={!submitted()}>
          <span class="xl:text-xl font-semibold">
            {question()}
          </span>
          <div class="w-full flex flex-col items-stretch gap-3">
            <label class="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <TextInput
                type='text'
                name='jawaban'
                disabled={loading()}
                placeholder='Jawaban'
                control={group.controls.answer}
                class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
              />
            </label>
            <TextError name='Jawaban' control={group.controls.answer} />
            <div class="flex items-center justify-between" />
            <button
              type='submit'
              disabled={loading()}
              onClick={handleValidation}
              class="btn btn-block btn-primary"
            >
              <Show when={!loading()}>
                <span>Kirim</span>
              </Show>

              <Show when={loading()}>
                <span class="loading loading-dots loading-lg" />
              </Show>
            </button>
          </div>
        </Show>

        <Show when={submitted()}>
          <span class="xl:text-xl font-semibold">
            Terima kasih telah mengirimkan jawaban
          </span>
          <button
            type='button'
            class="btn btn-primary"
            onClick={() => navigate('/', { replace: true })}
          >
            Kembali
          </button>
        </Show>
      </AuthLayout>
    </SafeForm>
  );
}