import AuthContext from './context';
import { useContext } from 'solid-js';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Something went wrong when use theme context');

  return context;
};

export default useAuth;

