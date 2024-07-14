import { alert } from '@utils';
import { Auth } from '@contexts';
import { MainLayout } from '@layouts';
import { questionModel } from '@models';
import { IQuestionModel } from '@interfaces';
import { useNavigate } from '@solidjs/router';
import { createEffect, createResource, createSignal, For, Show, Suspense } from 'solid-js';

export default function Question() {
  const navigate = useNavigate();
  const { user } = Auth.useAuth();
  const [total, setTotal] = createSignal<number>(0);
  const [search, setSearch] = createSignal<string>('');
  const [filteredData, setFilteredData] = createSignal<IQuestionModel[]>([]);
  const [questions, { mutate, refetch }] = createResource<IQuestionModel[]>(async () => {
    const data = await questionModel.getQuestions();
    const filteredData = data?.filter((question) => {
      return question.uid === user()?.id;
    });

    setTotal(filteredData?.length || 0);
    return (filteredData == null || filteredData == undefined) ? [] : filteredData;
  });

  createEffect(() => {
    if (search().length === 0) {
      setFilteredData([]);
      setTotal(questions()?.length || 0);
    }

    if (search().length > 0 && Array.isArray(questions()) && questions()?.length !== 0) {
      const data = questions()?.filter((question) => {
        return question.question.toLowerCase().includes(search().toLowerCase());
      });

      setFilteredData(data || []);
      setTotal(data?.length || 0);
    }
  });

  const handleSearch = (e: Event) => {
    setSearch((e.target as HTMLInputElement).value);
  }

  const handleDelete = async (id: string) => {
    alert.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const status = await questionModel.deleteQuestion(id);
        console.log(status);
        
        if (status.id != 'NaN') {
          alert.fire('Deleted!', 'Your data has been deleted.', 'success');
          refetch();
        } else {
          alert.fire('Failed!', 'Failed to delete data.', 'error');
        }
      }
    });
  }

  const DataStructur = (props: { question: IQuestionModel }) => (
    <tr>
      <td class="table-cell text-center">{props.question.id || "###"}</td>
      <td class="table-cell text-center">{props.question.question}</td>
      <td class="table-cell text-center">
        <button
          type='button'
          class="btn btn-ghost"
          onclick={() => navigate(`/${user()?.id}/${props.question.id}`)}
        >
          Share
        </button>
        <button
          type='button'
          class="btn btn-ghost"
          onclick={() => navigate('/questions/answer', { state: { questId: props.question.id?.toString(), question: props.question.question } })}
        >
          Jawaban
        </button>
        <button
          type='button'
          class="btn btn-ghost"
          onclick={() => navigate('/questions/edit', { state: props.question })}
        >
          Edit
        </button>
        <button
          type='button'
          class="btn btn-ghost"
          onclick={() => handleDelete(props.question.id?.toString() || '')}
        >
          Delete
        </button>
      </td>
    </tr>
  )

  return (
    <MainLayout title='Question'>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          {/* Make total data on left corner, title on middle, button add on right corner */}
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="lg:text-lg text-sm font-bold">Total Data: {total()}</span>
            </div>

            <h2 class="lg:text-2xl text-sm font-bold">Question</h2>

            <div class="flex items-center gap-2">
              <button
                type='button'
                class="btn btn-primary"
                onClick={() => navigate('/questions/add')}
              >
                Add
              </button>
            </div>
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
                        onclick={() => refetch()}
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                </div>
                <div class='absolute top-5 right-5'>
                  <div class="flex items center justify-between">
                    <input
                      type='search'
                      placeholder='Search'
                      onchange={(e) => handleSearch(e)}
                      class="input input-bordered h-[4vh] lg:w-[15vw] w-[50vw]"
                    />
                  </div>
                </div>
                <table class="table w-[100%] mt-[5vh] mb-[5vh]">
                  <thead>
                    <tr>
                      <th class="table-cell text-center">ID</th>
                      <th class="table-cell text-center">Question</th>
                      <th class="table-cell text-center">Action</th>
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
                      <Show when={Array.isArray(questions()) && questions()?.length === 0}>
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

                      <Show when={Array.isArray(questions()) && questions()?.length !== 0 && filteredData().length === 0}>
                        <For each={questions()}>
                          {(question) => <DataStructur question={question} />}
                        </For>
                      </Show>

                      <Show when={Array.isArray(questions()) && questions()?.length !== 0 && filteredData().length !== 0}>
                        <For each={filteredData()}>
                          {(question) => <DataStructur question={question} />}
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