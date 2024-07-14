import AuthContext from './context';
import { useNavigate } from '@solidjs/router';
import { IProviderProp, IUserModel } from '@interfaces';
import { EAuthUpdateCategory, EDebugType } from '@enums';
import { createSignal, createEffect, Component } from 'solid-js';
import { deleteStorage, getStorage, println, setAndDeleteStorage } from '@utils';

const AuthProvider: Component<IProviderProp> = (props: IProviderProp) => {
  const navigate = useNavigate();
  const [role, setRole] = createSignal<string>('');
  const [checked, setChecked] = createSignal<boolean>(false);
  const [isLogged, setIsLogged] = createSignal<boolean>(false);
  const [user, setUser] = createSignal<IUserModel | null>(null);

  const updateData = (category: EAuthUpdateCategory, data: any) => {
    switch (category) {
    case EAuthUpdateCategory.USER:
      setUser({
        id: data.id,
        name: data.name,
        username: data.username,
        password: "",
      });

      if (user() !== null) setAndDeleteStorage("NGL-USR", {
        id: data.id,
        name: data.name,
        username: data.username,
      });

      break;
    case EAuthUpdateCategory.ROLE:
      setRole(data);
      break;
    case EAuthUpdateCategory.STATUS:
      setIsLogged(data);
      break;
    default:
      println('System', 'Something went wrong when updating data', EDebugType.ERROR);
      break;
    }
  };

  const logoutUser = () => {
    ["NGL-USR"].forEach((key) => deleteStorage(key));
    navigate('/', { replace: true });

    setIsLogged(false);
    setUser(null);
    setRole('');
  };

  const checkIsLogged = async () => {
    if (isLogged() || checked()) return;

    const user = getStorage("NGL-USR");

    if (!user || !user?.name || !user?.username) {
      setChecked(true);
      ["NGL-USR"].forEach((key) => deleteStorage(key));

      return;
    }

    updateData(EAuthUpdateCategory.USER, user);
    updateData(EAuthUpdateCategory.STATUS, true);
    updateData(EAuthUpdateCategory.ROLE, "user");
  };

  createEffect(async () => {
    await checkIsLogged();
  });

  return (
    <AuthContext.Provider value={{ user, role, isLogged, updateData, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
