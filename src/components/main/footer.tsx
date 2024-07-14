import { Show } from "solid-js";

interface IFooterProps {
  disabled?: boolean;
}

export default function Footer(props: IFooterProps) {
  const Author = () => (
    <>
      <Show when={!props.disabled}>
        <a rel="noopener" href="https://github.com/sleepy4k" target="_blank">Benjamin4k</a>
      </Show>
      
      <Show when={props.disabled}>
        <span>Benjamin4k</span>
      </Show>
    </>
  )

  return (
    <footer class="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by <Author /></p>
      </aside>
    </footer>
  );
}
