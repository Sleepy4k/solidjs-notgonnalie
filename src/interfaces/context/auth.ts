import { Accessor } from 'solid-js';
import IUserModel from '../model/user';
import { EAuthUpdateCategory } from '@enums';

interface IAuthContext {
  user: Accessor<IUserModel | null>,
  role: Accessor<string>,
  isLogged: Accessor<boolean>,
  updateData: (category: EAuthUpdateCategory, data: any) => void,
  logoutUser: () => void,
}

export default IAuthContext;
