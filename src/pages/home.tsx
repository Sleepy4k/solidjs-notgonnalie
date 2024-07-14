import { APP_NAME } from '@consts';
import { MainLayout } from '@layouts';

export default function Home() {
  return (
    <MainLayout>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          <div class="card shadow-2xl">
            <div class="card-body">
              <h2 class="card-title">Welcome to {APP_NAME.toUpperCase()}</h2>
              <div class='divider divider-lg'></div>
              <p class="text-lg text-gray-500">
                {APP_NAME} adalah aplikasi mengirim pesan anonim yang dibuat menggunakan SolidJS.
              </p>
              <p class="text-lg text-gray-500">
                Aplikasi ini dibuat dengan integrasi Firebase untuk menyimpan data pengguna dan pesan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}