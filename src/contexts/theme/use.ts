import { useContext } from 'solid-js';
import ThemeContext from './context';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('Something went wrong when use theme context');

  return context;
};

export default useTheme;
