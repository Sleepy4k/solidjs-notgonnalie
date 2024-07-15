import { Auth } from '@contexts';
import { onMount } from 'solid-js';
import { AuthLayout } from '@layouts';
import { useLocation, useNavigate } from '@solidjs/router';

interface IShowAnswerLocation {
  answer: string;
  question: string;
  questId: string;
}

export default function ShowAnswer() {
  const navigate = useNavigate();
  const { user } = Auth.useAuth();
  const { state } = useLocation<IShowAnswerLocation>();

  onMount(async () => {
    if (!user()) navigate('/404', { replace: true });
    if (!state || state == null || state == undefined) navigate('/answer', { replace: true });
  });

  return (
    <AuthLayout title='Lihat Jawaban'>
      <span class="xl:text-xl font-semibold">
        {state?.question || '###'}
      </span>
      <div class="w-full flex flex-col items-stretch gap-3">
        <label class="input input-bordered flex items-center gap-2 text-center">
          <span class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'>
            {state?.answer || '###'}
          </span>
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