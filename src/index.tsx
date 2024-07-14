/* @refresh reload */
import './index.css';
import App from '@/app';
import { render } from 'solid-js/web';

// If you want to use Solid Devtools, import it here
import 'solid-devtools';

// Get the root element from the index.html file
let root = document.getElementById('root');

// If root is not an HTMLElement (e.g. it's null), but it's not in development mode, show a warning and create page to render the app into.
if (!(root instanceof HTMLElement)) {
  if (import.meta.env.DEV) console.warn(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );

  root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
}

render(() => <App />, root);