import { onMount } from 'solid-js';
import { useLocation, useNavigate } from '@solidjs/router';

interface IRequestFailed {
  hasPermission: boolean;
}

export default function RequestFailed() {
  const navigate = useNavigate();
  const { state } = useLocation<IRequestFailed>();

  onMount(() => {
    if (!state || state == null || state == undefined || !state?.hasPermission) navigate('/', { replace: true });
  });

  return (
    <div class="w-screen h-screen">
      <div class="w-full h-full flex justify-center items-center">
        <div class="flex flex-col justify-center items-center gap-10">
          <div class="flex flex-col items-center gap-2">
            <h1 class="font-bold text-9xl">419</h1>
            <h1 class="font-bold text-5xl">Sesi Telah Berakhir</h1>
          </div>

          <div class="flex flex-col items-center gap-2">
            <p class="text-lg text-center">
              Sesi halaman yang anda buka sudah berakhir,
              <br />
              Silahkan buka ulang kembali halaman yang anda buka.
            </p>
          </div>

          <div class="flex flex-col items-center gap-2">
            <button
              type='button'
              onClick={() => navigate('/', { replace: true })}
              class="btn btn-block dark:btn-neutral"
            >
              <span>Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}