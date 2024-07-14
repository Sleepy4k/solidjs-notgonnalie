import type { EThemeType } from '@enums';
import { Accessor } from 'solid-js';

interface IThemeContext {
  theme: Accessor<EThemeType>,
  themeFunc: () => void
}

export default IThemeContext;