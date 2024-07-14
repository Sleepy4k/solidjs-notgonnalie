import { IAuthContext } from '@interfaces';
import { createContext } from 'solid-js';

const AuthContext = createContext<IAuthContext>();

export default AuthContext;
