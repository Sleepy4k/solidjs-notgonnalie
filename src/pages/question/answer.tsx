import { MainLayout } from '@layouts';
import { answerModel } from '@models';
import { IAnswerModel } from '@interfaces';
import { useLocation, useNavigate } from '@solidjs/router';
import { createResource, createSignal, For, onMount, Show, Suspense } from 'solid-js';

interface IQuestionAnswerLocation {
  questId: string;
  question: string;
}

export default function QuestionAnswer() {
  const navigate = useNavigate();
  const [total, setTotal] = createSignal<number>(0);
  const { state } = useLocation<IQuestionAnswerLocation>();
  const [answers, { mutate, refetch }] = createResource<IAnswerModel[]>(async () => {
    const data = await answerModel.getAnswers();
    const filteredData = data?.filter((answer) => {
      return answer.questId === state?.questId;
    });

    setTotal(filteredData?.length || 0);
    return (filteredData == null || filteredData == undefined) ? [] : filteredData;
  });

  onMount(() => {
    if (!state || state == null || state == undefined) navigate('/questions', { replace: true });
  });

  const DataStructur = (props: { answer: IAnswerModel }) => (
    <tr>
      <td class="table-cell text-center">{props.answer.id || "###"}</td>
      <td class="table-cell text-center">{props.answer.answer}</td>
    </tr>
  )

  return (
    <MainLayout title='Answer'>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          {/* Make total data on left corner, title on middle, button add on right corner */}
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="lg:text-lg text-sm font-bold">Total Data: {total()}</span>
            </div>

            <h2 class="lg:text-2xl text-sm font-bold">List Jawaban ({state?.question})</h2>

            <div class="flex items-center gap-2" />
          </div>

          <div class="divider divider-lg" />

          <div class="card shadow-2xl">
            <div class="card-body">
              <div>
                <div>
                  <div class="flex items center justify-between">
                    {/* Make button refresh */}
                    <div class="flex items-center gap-2">
                      <button
                        type='button'
                        class="btn btn-primary"
                        onclick={() => navigate('/questions')}
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
                </div>
                <table class="table w-[100%] mt-[5vh] mb-[5vh]">
                  <thead>
                    <tr>
                      <th class="table-cell text-center">ID</th>
                      <th class="table-cell text-center">Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Suspense fallback={
                      <tr>
                        <td class="table-cell text-center">
                          <div class="flex justify-center items-center w-full h-[35vh]">
                            <div class="loading loading-lg" />
                          </div>
                        </td>
                      </tr>
                    }>
                      <Show when={Array.isArray(answers()) && answers()?.length === 0}>
                        <tr>
                          <td class="table-cell text-center"></td>
                          <td class="table-cell text-center">
                            <div class="flex justify-center items-center w-full h-[35vh]">
                              <p class="text-2xl">
                                Belum ada pertanyaan
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