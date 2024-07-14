import MetaContext from './context';
import { useContext } from 'solid-js';

const useMeta = () => {
  const context = useContext(MetaContext);
  if (!context) throw new Error('Something went wrong when use meta context');

  return context;
};

export default useMeta;