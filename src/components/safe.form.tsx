import { CSRFService } from '@services';
import { useNavigate } from '@solidjs/router';
import { createEffect, createSignal, JSXElement, onCleanup, onMount } from 'solid-js';

interface ISafeFormProps {
  regenerate?: boolean;
  children: JSXElement;
}

export default function SafeForm(props: ISafeFormProps) {
  const navigate = useNavigate();
  const [formIds, setFormIds] = createSignal<number>(0);

  onMount(() => {
    if (formIds() === 0) setFormIds(CSRFService.generateIds());

    CSRFService.setToken(formIds());
  });

  onCleanup(() => {
    CSRFService.removeToken();
  });

  createEffect(() => {
    if (props.regenerate) navigate('/419', { replace: true, state: { hasPermission: true }});
  });

  return (
    <div>
      {props.children}
      <input type="hidden" name="csrf_token" value={CSRFService.generateToken(formIds())} />
    </div>
  );
}