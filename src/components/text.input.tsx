import { createFormControl, IFormControl } from 'solid-forms';
import { AiFillEye, AiFillEyeInvisible } from 'solid-icons/ai';
import { mergeProps, Show, For, createSignal } from 'solid-js';

interface ITextErrorProps {
  name: string;
  control: IFormControl<string>;
}

interface ITextInputProps extends ITextErrorProps {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
}

const TextInput = (_props: ITextInputProps) => {
  const [hidden, setHidden] = createSignal(true);
  const props = mergeProps({ control: createFormControl('') }, _props);

  const isPassword = () => props.type === 'password';

  const propClass = () => {
    if (isPassword()) return `${props.class} w-[95%]`;
    return `${props.class} w-full`;
  };

  return (
    <div class='flex w-full'>
      <div
        class='items-start w-full'
        classList={{
          'is-dirty': props.control.isDirty,
          'is-valid': props.control.isValid,
          'is-clean': !props.control.isDirty,
          'is-invalid': !props.control.isValid,
          'is-touched': props.control.isTouched,
          'is-required': props.control.isRequired,
          'is-untouched': !props.control.isTouched,
        }}
      >
        <Show when={props.type !== 'textarea'}>
          <input
            name={props.name}
            type={props.type || 'text'}
            placeholder={props.placeholder || 'Text...'}
            value={props.control.value}
            onInput={(e) => {
              props.control.setValue(e.currentTarget.value);
              // check if input not empty
              if (e.currentTarget.value !== '')
                props.control.markDirty(true);
              else
                props.control.markDirty(false);
            }}
            onBlur={() => props.control.markTouched(true)}
            required={props.control.isRequired}
            disabled={props.disabled}
            class={propClass()}
          />
        </Show>

        <Show when={props.type === 'textarea'}>
          <textarea
            name={props.name}
            placeholder={props.placeholder || 'Text...'}
            onInput={(e) => {
              props.control.setValue(e.currentTarget.value);
              // check if input not empty
              if (e.currentTarget.value !== '')
                props.control.markDirty(true);
              else
                props.control.markDirty(false);
            }}
            onBlur={() => props.control.markTouched(true)}
            required={props.control.isRequired}
            disabled={props.disabled}
            class={propClass()}
          >{props.control.value}</textarea>
        </Show>
      </div>

      <Show when={isPassword()}>
        <button
          type='button'
          title='Show/Hide Password'
          class='items-end'
          onClick={() => {
            const input = document.querySelector(`input[name="${props.name}"]`);
            if (!input) return;

            setHidden(!hidden());
            input.setAttribute('type', input.getAttribute('type') === 'password' ? 'text' : 'password');
          }}
        >
          <Show when={hidden()}>
            <AiFillEyeInvisible size={25} />
          </Show>

          <Show when={!hidden()}>
            <AiFillEye size={25} />
          </Show>
        </button>
      </Show>
    </div>
  );
};

const TextError = (props: ITextErrorProps) => {
  return (
    <Show when={props.control.isTouched && !!props.control.errors}>
      <For each={Object.values(props.control.errors || {})}>
        {(errorMsg) => <small class='ms-1'>{props.name} {errorMsg}</small>}
      </For>
    </Show>
  );
};

export { TextInput, TextError };