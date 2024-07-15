import { Auth } from '@contexts';
import { userModel } from '@models';
import { AuthLayout } from '@layouts';
import { CSRFService } from '@services';
import { useNavigate } from '@solidjs/router';
import { Show, createSignal, onMount } from 'solid-js';
import { formValidator, println, verify } from '@utils';
import { EAuthUpdateCategory, EDebugType } from '@enums';
import { TextInput, TextError, SafeForm } from '@components';
import { createFormGroup, createFormControl } from 'solid-forms';

export default function Login() {
  const navigate = useNavigate();
  const { isLogged, updateData } = Auth.useAuth();
  const [loading, setLoading] = createSignal<boolean>(false);
  const group = createFormGroup({
    safe_form: createFormControl(false),
    username: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
    password: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    })
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

    group.markSubmitted(true);

    setLoading(true);
    handleSubmit();
  };

  const handleSubmit = async () => {
    const user = await userModel.findUser(group.value.username || "");

    group.markSubmitted(false);

    if (!user) {
      println('System', 'User tidak ditemukan', EDebugType.ERROR);
      setLoading(false);
      return;
    }

    const passwordMatch = await verify(group.value.password || "", user.password, user.key);

    if (!passwordMatch) {
      println('System', 'Password salah', EDebugType.ERROR);
      setLoading(false);
      return;
    }

    updateData(EAuthUpdateCategory.USER, user);
    updateData(EAuthUpdateCategory.STATUS, true);
    updateData(EAuthUpdateCategory.ROLE, user.role);

    setLoading(false);
    println('System', `Selamat datang ${user.name}`, EDebugType.SUCCESS);

    navigate('/', { replace: true });
  };

  return (
    <SafeForm regenerate={!!group.controls.safe_form.errors}>
      <AuthLayout disabled={loading()} title='Masuk'>
        <span class="xl:text-xl font-semibold">
          Halo, 👋 Selamat Datang Kembali!
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
          <div class="flex items-center justify-between" />
          <button
            type='submit'
            disabled={loading()}
            onClick={handleValidation}
            class="btn btn-block btn-primary"
          >
            <Show when={!loading()}>
              <span>Masuk</span>
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
              onClick={() => navigate('/register')}
              class="btn btn-block dark:btn-neutral"
            >
              Daftar
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