import { EThemeType } from '@enums';
import { Meta, Theme } from '@contexts';
import { NavBar, Footer } from '@components';
import { IMainLayoutProp } from '@interfaces';
import { styled } from 'solid-styled-components';
import BACKGROUND from '@assets/images/background.webp';
import { createEffect, JSXElement, Show } from 'solid-js';

export default function MainLayout(props: IMainLayoutProp) {
  const { theme } = Theme.useTheme();
  const { changeTitle } = Meta.useMeta();

  // Buat styled div component untuk nambahin css background image
  // Karena SolidJS tidak support inline style (ada warning nya)
  const StyledDiv = styled('div')`
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url(${BACKGROUND});
  `;

  createEffect(() => {
    if (props.title) changeTitle(props.title);
    else changeTitle();
  });

  const Layout = (props: { children: JSXElement, class: string }) => (
    <div class='w-full'>
      <Show when={theme() === EThemeType.LIGHT}>
        <div class={props.class}>
          {props.children}
        </div>
      </Show>
      <Show when={theme() === EThemeType.DARK}>
        <StyledDiv class={props.class}>
          {props.children}
        </StyledDiv>
      </Show>
    </div>
  );

  return (
    <Layout
      class="p-0 m-0 overflow-visible min-h-screen flex flex-col justify-between"
    >
      <NavBar disabled={props.disabled} />
      <div class='lg:mt-[8vh] mt-[5rem]'>
        <div class="flex gap-0 pt-5 mb-auto flex justify-center z-0">
          {props.children}
        </div>
      </div>
      <Footer disabled={props.disabled} />
    </Layout>
  );
}