import { Auth } from '@contexts';
import { userModel } from '@models';
import { EDebugType } from '@enums';
import { AuthLayout } from '@layouts';
import { CSRFService } from '@services';
import { SweetAlertResult } from 'sweetalert2';
import { Show, createSignal, onMount } from 'solid-js';
import { createFormGroup, createFormControl } from 'solid-forms';
import { TextInput, TextError, SafeForm, SwalConfirm } from '@components';
import { alert, encrypt, formValidator, generateKey, println } from '@utils';
import { BeforeLeaveEventArgs, useBeforeLeave, useNavigate } from '@solidjs/router';

export default function Register() {
  const navigate = useNavigate();
  const { isLogged } = Auth.useAuth();
  const [cleared, setCleared] = createSignal<boolean>(false);
  const [loading, setLoading] = createSignal<boolean>(false);
  const group = createFormGroup({
    safe_form: createFormControl(false),
    role: createFormControl('user'),
    name: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
    username: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
    password: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
    password_confirmation: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
  });

  onMount(() => {
    if (isLogged()) navigate('/', { replace: true });
  });

  const handleValidation = () => {
    if (group.isSubmitted) {
      println('System', 'Formulir sudah dikirimkan', EDebugType.ERROR);
      return;
    }

    if (!group.isValid) {
      println('System', 'Silahkan isi semua formulir', EDebugType.ERROR);
      return;
    }

    if (!CSRFService.validateToken()) {
      group.controls.safe_form.setErrors({ invalid: 'csrf token tidak valid' });
      return;
    } else {
      group.controls.safe_form.setErrors(null);
    }

    if (group.value.password !== group.value.password_confirmation) {
      println('System', 'Password tidak sama', EDebugType.ERROR);
      return;
    }

    group.markSubmitted(true);

    setLoading(true);
    handleSubmit();
  };

  const handleSubmit = async () => {
    const encryptKey = generateKey(group.value.username || "", group.value.password || "");
    const encryptPassword = await encrypt(group.value.password || "", encryptKey);

    const data = await userModel.createUser({
      name: group.value.name || "",
      username: group.value.username || "",
      password: encryptPassword || "",
      role: group.value.role || "",
      key: encryptKey,
    });

    group.markSubmitted(false);

    if (!data) {
      println('System', 'Username sudah digunakan, silahkan coba yang lain', EDebugType.ERROR);
      setLoading(false);
      return;
    }

    setCleared(true);
    setLoading(false);
    println('System', `Selamat bergabung ${group.value.name}`, EDebugType.SUCCESS);

    navigate('/login', { replace: true });
  };

  useBeforeLeave((e: BeforeLeaveEventArgs) => {
    if (group.isDirty && !e.defaultPrevented && !group.controls.safe_form.errors && !cleared()) {
      e.preventDefault();
      setTimeout(() => {
        alert.fire({
          title: 'Konfirmasi',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Ya',
          cancelButtonText: 'Tidak',
          html: SwalConfirm() as HTMLElement
        }).then((result: SweetAlertResult) => {
          if (result.isConfirmed) e.retry(true);
        });
      }, 100);
    }
  });

  return (
    <SafeForm regenerate={!!group.controls.safe_form.errors}>
      <AuthLayout disabled={loading()} title='Masuk'>
        <span class="xl:text-xl font-semibold">
          Hai, 👋 Siap bergabung dengan kami?
        </span>
        <div class="w-full flex flex-col items-stretch gap-3">
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <TextInput
              type='text'
              name='name'
              disabled={loading()}
              placeholder='Nama Kamu'
              control={group.controls.name}
              class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
            />
          </label>
          <TextError name='Name' control={group.controls.name} />
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <TextInput
              type='text'
              name='username'
              disabled={loading()}
              placeholder='Username Kamu'
              control={group.controls.username}
              class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
            />
          </label>
          <TextError name='Username' control={group.controls.username} />
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <TextInput
              type='password'
              name='password'
              disabled={loading()}
              placeholder='Password'
              control={group.controls.password}
              class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
            />
          </label>
          <TextError name='Password' control={group.controls.password} />
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <TextInput
              type='password'
              name='password_confirmation'
              disabled={loading()}
              placeholder='Password Konfirmasi'
              control={group.controls.password_confirmation}
              class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
            />
          </label>
          <TextError name='Password Konfirmasi' control={group.controls.password_confirmation} />
          <div class="flex items-center justify-between" />
          <button
            type='submit'
            disabled={loading()}
            onClick={handleValidation}
            class="btn btn-block btn-primary"
          >
            <Show when={!loading()}>
              <span>Daftar</span>
            </Show>

            <Show when={loading()}>
              <span class="loading loading-dots loading-lg" />
            </Show>
          </button>
          <div class="divider text-sm">OR</div>
          <div class="w-full flex justify-center items-center gap-4">
            <button
              type='button'
              disabled={loading()}
              onClick={() => navigate('/login')}
              class="btn btn-block dark:btn-neutral"
            >
              Masuk
            </button>
          </div>
          <div class="w-full flex justify-center items-center gap-4 mt-2">
            <button
              type='button'
              disabled={loading()}
              onClick={() => navigate('/')}
              class="btn btn-block dark:btn-neutral"
            >
              Home
            </button>
          </div>
        </div>
      </AuthLayout>
    </SafeForm>
  );
}