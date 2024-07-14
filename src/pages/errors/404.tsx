import { APP_NAME } from '@consts';
import { Title } from '@solidjs/meta';
import { useNavigate } from '@solidjs/router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div class="w-screen h-screen">
      <Title>{`404 | ${APP_NAME}`}</Title>
      <div class="w-full h-full flex justify-center items-center">
        <div class="flex flex-col justify-center items-center gap-10">
          <div class="flex flex-col items-center gap-2">
            <h1 class="font-bold text-9xl">404</h1>
            <h1 class="font-bold text-5xl">Halaman Tidak Ditemukan</h1>
          </div>

          <div class="flex flex-col items-center gap-2">
            <p class="text-lg text-center">
              Halaman yang anda cari mungkin telah dihapus,
              <br />
              nama telah diubah, atau sementara tidak tersedia.
            </p>
          </div>

          <div class="flex flex-col items-center gap-2">
            <button
              type='button'
              onClick={() => navigate('/')}
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