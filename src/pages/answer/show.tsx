import { Auth } from '@contexts';
import { onMount } from 'solid-js';
import { AuthLayout } from '@layouts';
import { TextInput } from '@components';
import { useLocation, useNavigate } from '@solidjs/router';
import { createFormGroup, createFormControl } from 'solid-forms';

interface IShowAnswerLocation {
  answer: string;
  question: string;
  questId: string;
}

export default function ShowAnswer() {
  const navigate = useNavigate();
  const { isLogged } = Auth.useAuth();
  const { state } = useLocation<IShowAnswerLocation>();
  const group = createFormGroup({
    answer: createFormControl(state?.answer || ''),
  });

  onMount(async () => {
    if (!isLogged()) navigate('/404', { replace: true });
    if (!state || state == null || state == undefined) navigate('/answer', { replace: true });
  });

  return (
    <AuthLayout title='Lihat Jawaban'>
      <span class="xl:text-xl font-semibold">
        {state?.question || '###'}
      </span>
      <div class="w-full h-screen lg:h-auto flex flex-col items-stretch gap-3">
        <label class="input-bordered text-center">
          <TextInput
            type='textarea'
            name='question'
            disabled={true}
            placeholder='Pertanyaan Kamu'
            control={group.controls.answer}
            class='grow input input-bordered h-auto pl-1 pr-0 h-full min-h-[10rem]'
          />
        </label>
        <div class="flex items-center justify-between" />
        <div class="w-full flex justify-center items-center gap-4 mt-2">
          <button
            type='button'
            class="btn btn-block dark:btn-primary"
            onClick={() => navigate('/answer', {
              state: {
                questId: state?.questId || '0',
                question: state?.question || '###'
              }
            })}
          >
            Kembali
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}