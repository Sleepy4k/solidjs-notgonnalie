import { alert } from '@utils';
import { Auth } from '@contexts';
import { MainLayout } from '@layouts';
import { questionModel } from '@models';
import { SwalConfirm } from '@components';
import { ESwalConfirmType } from '@enums';
import { IQuestionModel } from '@interfaces';
import { useNavigate } from '@solidjs/router';
import { createEffect, createResource, createSignal, For, onMount, Show, Suspense } from 'solid-js';

export default function Question() {
  const navigate = useNavigate();
  const { user } = Auth.useAuth();
  const [total, setTotal] = createSignal<number>(0);
  const [search, setSearch] = createSignal<string>('');
  const [filteredData, setFilteredData] = createSignal<IQuestionModel[]>([]);
  const [questions, { mutate, refetch }] = createResource<IQuestionModel[]>(async () => {
    const data = await questionModel.getQuestions();
    const filteredData = data?.filter((question) => question.uid === user()?.id);

    setTotal(filteredData?.length || 0);
    return (filteredData == null || filteredData == undefined) ? [] : filteredData;
  });

  onMount(() => {
    if (!user()) navigate('/404', { replace: true });
  });

  createEffect(() => {
    const isSearchEmpty = search().length <= 0;

    if (isSearchEmpty) {
      setFilteredData([]);
      setTotal(questions()?.length || 0);
    } else if (!isSearchEmpty && Array.isArray(questions()) && questions()?.length !== 0) {
      const data = questions()?.filter((question) => {
        return question.question.toLowerCase().includes(search().toLowerCase());
      });

      setFilteredData(data || []);
      setTotal(data?.length || 0);
    }
  });

  const handleSearch = (e: Event) => setSearch((e.target as HTMLInputElement).value);

  const handleDelete = async (id: string) => {
    alert.fire({
      title: 'Konfirmasi',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus',
      cancelButtonText: 'Tidak, simpan dulu',
      html: SwalConfirm(ESwalConfirmType.DELETE) as HTMLElement
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const status = await questionModel.deleteQuestion(id);

        if (status.id != 'NaN') {
          alert.fire('Deleted!', 'Your data has been deleted.', 'success');
          refetch();
        } else {
          alert.fire('Failed!', 'Failed to delete data.', 'error');
        }
      }
    });
  }

  const handleCopy = async (questId: string) => {
    const el = document.createElement('input');
    el.value = `${location.origin}/#/${user()?.id}/${questId}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert.fire('Copied!', 'Link copied to clipboard.', 'success');
  }

  const DataStructur = (props: { question: IQuestionModel }) => (
    <tr>
      <td class="table-cell text-center">{props.question.id || "###"}</td>
      <td class="table-cell text-center">{props.question.question}</td>
      <td class="table-cell text-center">
        <button
          type='button'
          class="btn btn-ghost"
          onclick={() => handleCopy(props.question.id?.toString() || '')}
        >
          Copy Link
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
    <MainLayout title='Pertanyaan'>
      <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <span class="lg:text-lg text-xs font-bold">Total Pertanyaan: {total()}</span>
            </div>

            <h2 class="lg:text-2xl text-sm font-bold">Pertanyaan</h2>

            <div class="flex items-center">
              <button
                type='button'
                class="btn btn-primary lg:w-[7vw] w-[18vw] lg:h-[5vh] h-[4vh] lg:text-lg text-xs"
                onClick={() => navigate('/questions/add')}
              >
                Tambah
              </button>
            </div>
          </div>

          <div class="divider divider-lg" />

          <div class="card shadow-2xl">
            <div class="card-body">
              <div class="flex items center justify-between">
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
              <div class='lg:absolute lg:top-5 lg:right-5 mt-[2vh]'>
                <div class="flex items center justify-between">
                  <input
                    type='input'
                    placeholder='Search'
                    onkeyup={(e) => handleSearch(e)}
                    class="input input-bordered lg:h-[4vh] h-[2.5rem] lg:w-[15vw] w-[50vw]"
                  />
                </div>
              </div>
              <div class='overflow-x-auto'>
                <table class="table table-auto w-full mt-[5vh] mb-[5vh]">
                  <thead>
                    <tr>
                      <th class="table-cell text-center">ID</th>
                      <th class="table-cell text-center">Pertanyaan</th>
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