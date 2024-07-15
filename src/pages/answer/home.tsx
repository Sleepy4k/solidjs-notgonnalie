import { Auth } from '@contexts';
import { MainLayout } from '@layouts';
import { answerModel } from '@models';
import { IAnswerModel } from '@interfaces';
import { useLocation, useNavigate } from '@solidjs/router';
import { createResource, createSignal, For, onMount, Show, Suspense } from 'solid-js';

interface IAnswerLocation {
  questId: string;
  question: string;
}

export default function Answer() {
  const navigate = useNavigate();
  const { user } = Auth.useAuth();
  const { state } = useLocation<IAnswerLocation>();
  const [total, setTotal] = createSignal<number>(0);
  const [answers, { mutate, refetch }] = createResource<IAnswerModel[]>(async () => {
    const data = await answerModel.getAnswers();
    const filteredData = data?.filter((answer) => {
      return answer.questId === state?.questId;
    });

    setTotal(filteredData?.length || 0);
    return (filteredData == null || filteredData == undefined) ? [] : filteredData;
  });

  onMount(() => {
    if (!user()) navigate('/404', { replace: true });
    if (!state || state == null || state == undefined) navigate('/question', { replace: true });
  });

  const DataStructur = (props: { answer: IAnswerModel }) => (
    <tr>
      <td class="table-cell text-center">{props.answer.id || "###"}</td>
      <td class="table-cell text-center">{props.answer.answer}</td>
      <td class="table-cell text-center">
        <button
          type='button'
          class="btn btn-ghost"
          onclick={() => navigate('/answer/show', {
            state: {
              questId: state?.questId || '0',
              question: state?.question || '###',
              answer: props.answer.answer
            }
          })}
        >
          Show
        </button>
      </td>
    </tr>
  )

  return (
    <MainLayout title='Jawaban Pertanyaan'>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          {/* Make total data on left corner, title on middle, button add on right corner */}
          <div class="flex items-center justify-between lg:gap-0 gap-5">
            <div class="flex items-center">
              <span class="lg:text-lg text-sm font-bold">Total Jawaban: {total()}</span>
            </div>

            <h2 class="lg:text-2xl text-xs font-bold text-center">List Jawaban ({state?.question})</h2>

            <div class="flex items-center" />
          </div>

          <div class="divider divider-lg" />

          <div class="card shadow-2xl">
            <div class="card-body">
              <div class="flex items center justify-between">
                <div class="flex items-center lg:gap-3 gap-4">
                  <button
                    type='button'
                    class="btn btn-neutral"
                    onclick={() => navigate('/question')}
                  >
                    Back
                  </button>
                  <button
                    type='button'
                    class="btn btn-primary"
                    onclick={() => refetch()}
                  >
                    Refresh
                  </button>
                </div>
              </div>
              <div class='overflow-x-auto'>
                <table class="table table-auto w-full mt-[5vh] mb-[5vh]">
                  <thead>
                    <tr>
                      <th class="table-cell text-center">ID</th>
                      <th class="table-cell text-center">Jawaban</th>
                      <th class="table-cell text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Suspense fallback={
                      <tr>
                        <td class="table-cell text-center"></td>
                        <td class="table-cell text-center">
                          <div class="flex justify-center items-center w-full h-[35vh]">
                            <div class="loading loading-lg" />
                          </div>
                        </td>
                        <td class="table-cell text-center"></td>
                      </tr>
                    }>
                      <Show when={Array.isArray(answers()) && answers()?.length === 0}>
                        <tr>
                          <td class="table-cell text-center"></td>
                          <td class="table-cell text-center">
                            <div class="flex justify-center items-center w-full h-[35vh]">
                              <p class="text-2xl">
                                Belum ada jawaban
                              </p>
                            </div>
                          </td>
                          <td class="table-cell text-center"></td>
                        </tr>
                      </Show>

                      <Show when={Array.isArray(answers()) && answers()?.length !== 0}>
                        <For each={answers()}>
                          {(answer) => <DataStructur answer={answer} />}
                        </For>
                      </Show>
                    </Suspense>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}