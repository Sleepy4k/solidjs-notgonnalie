import { APP_NAME } from '@consts';
import MetaContext from './context';
import { Title, Link } from '@solidjs/meta';
import { IProviderProp } from '@interfaces';
import { createSignal, Component } from 'solid-js';

const MetaProvider: Component<IProviderProp> = (props: IProviderProp) => {
  const [title, setTitle] = createSignal(APP_NAME);

  const changeTitle = (title?: string) => {
    if (!title || title == '') setTitle(APP_NAME);
    else setTitle(title + ' | ' + APP_NAME);
  };

  return (
    <MetaContext.Provider value={{
      changeTitle,
    }}>
      <Title>{title()}</Title>
      <Link rel="icon" href="https://docs.solidjs.com/favicon.ico" />
      {props.children}
    </MetaContext.Provider>
  );
};

export default MetaProvider;