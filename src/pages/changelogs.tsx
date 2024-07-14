import { EApiType } from '@enums';
import { MainLayout } from '@layouts';
import { ApiService } from '@services';
import { createResource, Suspense, For } from 'solid-js';

interface IChangeLogs {
  version: string;
  date: string;
  changes: string[];
}

export default function Home() {
  const [changelogs] = createResource<IChangeLogs[]>(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res: IChangeLogs[] = await ApiService.get({
      url: 'changelogs/main.json',
      name: 'System',
      server: EApiType.CHANGELOG
    });

    return res;
  });

  return (
    <MainLayout title='Change Logs'>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4 h-auto">
          <h1 class="text-2xl font-bold text-center">Changelogs</h1>
          <Suspense fallback={
            <div class="flex justify-center items-center mt-[25vh]">
              <span class="loading loading-ring loading-lg h-32 w-32 border-t-2 border-b-2" />
            </div>
          }>
            <div class="overflow-y-auto mb-[5vh]">
              <For each={changelogs()}>
                {(changelog: IChangeLogs) => (
                  <div class="card shadow-2xl">
                    <div class="card-body">
                      <h2 class="text-lg font-bold">Version {changelog.version} ({changelog.date})</h2>
                      <ul class="list-disc list-inside">
                        <For each={changelog.changes}>
                          {(change: string) => (
                            <li>{change}</li>
                          )}
                        </For>
                      </ul>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}