import { EDebugType } from '@enums';
import { MainLayout } from '@layouts';
import { CSRFService } from '@services';
import { println, formValidator } from '@utils';
import { createEffect, createSignal, Show } from 'solid-js';
import { TextInput, TextError, SafeForm } from '@components';
import { createFormGroup, createFormControl } from 'solid-forms';

export default function Contact() {
  const [loading, setLoading] = createSignal<boolean>(false);
  const group = createFormGroup({
    safe_form: createFormControl(false),
    name: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength, formValidator.maxLength],
    }),
    email: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.email, formValidator.maxLength],
    }),
    message: createFormControl('', {
      required: true,
      validators: [formValidator.required, formValidator.minLength],
    })
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
    // Create a email structure template
    // and redirect to email client

    // Example email structure
    const email = {
      to: 'Apri Pandu Wicaksono (sarahpalastrin@gmail.com)',
      subject: 'Contact Us',
      body: `Hi, I'm ${group.controls.name.value} (${group.controls.email.value}),
        I want to say ${group.controls.message.value}.
        Best Regards, ${group.controls.name.value}
      `
    };

    // Redirect to email client
    window.location.href = `mailto:${email.to}?subject=${email.subject}&body=${email.body}`;

    setLoading(false);
  };

  createEffect(() => {
    // If current url have query params
    // remove query params
    if (window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  });

  return (
    <SafeForm regenerate={!!group.controls.safe_form.errors}>
      <MainLayout title='Contact Us' disabled={loading()}>
        <div class="w-[85%] h-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
          <div class="flex flex-col gap-4">
            {/* Make form to contact us */}
            <div class="card shadow-2xl">
              <div class="card-body">
                <h2 class="card-title">Contact Us</h2>
                <div class='divider divider-lg'></div>
                <form class="form-control flex flex-col items-stretch gap-3">
                  <label class="input input-bordered min-w-full flex items-center gap-2">
                    <TextInput
                      type='text'
                      name='name'
                      disabled={loading()}
                      placeholder='Your Name'
                      control={group.controls.name}
                      class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
                    />
                  </label>
                  <TextError name='name' control={group.controls.name} />
                  <label class="input input-bordered min-w-full flex items-center gap-2">
                    <TextInput
                      type='email'
                      name='email'
                      disabled={loading()}
                      placeholder='Your Email'
                      control={group.controls.email}
                      class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
                    />
                  </label>
                  <TextError name='email' control={group.controls.email} />
                  <label class="input-bordered">
                    <TextInput
                      type='textarea'
                      name='message'
                      disabled={loading()}
                      placeholder='Your Message'
                      control={group.controls.message}
                      class='grow input outline-none focus:outline-none border-none border-[0px] h-auto pl-1 pr-0'
                    />
                  </label>
                  <TextError name='message' control={group.controls.message} />
                  <div class="flex items-center justify-between" />
                  <div class="divider text-sm" />
                  <div class='flex justify-center'>
                    <button
                      type='submit'
                      disabled={loading()}
                      onClick={handleValidation}
                      class="btn btn-block btn-primary w-[75%]"
                    >
                      <Show when={!loading()}>
                        <span>Kirim</span>
                      </Show>

                      <Show when={loading()}>
                        <span class="loading loading-dots loading-lg" />
                      </Show>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </SafeForm>
  );
}