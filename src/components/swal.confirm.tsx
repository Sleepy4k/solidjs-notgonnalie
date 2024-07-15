import { ESwalConfirmType } from "@enums";
import { Switch, Match, mergeProps } from "solid-js";

export default function SwalConfirm(type: ESwalConfirmType = ESwalConfirmType.INPUT) {
  return (
    <div class="flex justify-center items-center gap-4 mt-4">
      <Switch>
        <Match when={type === ESwalConfirmType.INPUT}>
          <span>
            Apakah anda yakin ingin meninggalkan halaman ini?
            <br />
            Semua data yang sudah di buat akan hilang!!
          </span>
        </Match>

        <Match when={type === ESwalConfirmType.LOGOUT}>
          <span>
            Apakah anda yakin ingin keluar?
            <br />
            Semua data yang belum disimpan akan hilang!!
          </span>
        </Match>

        <Match when={type === ESwalConfirmType.DELETE}>
          <span>
            Apakah anda yakin ingin menghapus data ini?
            <br />
            Data yang sudah dihapus tidak bisa di kembalikan!!
          </span>
        </Match>
      </Switch>
    </div>
  );
}