import { Meta } from '@contexts';
import { APP_NAME } from '@consts';
import { createEffect } from 'solid-js';
import { ChangeTheme } from '@components';
import { useNavigate } from '@solidjs/router';
import { IMainLayoutProp } from '@interfaces';

export default function AuthLayout(props: IMainLayoutProp) {
  const navigate = useNavigate();
  const { changeTitle } = Meta.useMeta();

  createEffect(() => {
    if (props.title) changeTitle(props.title);
    else changeTitle();
  });

  return (
    <div class="w-full p-0 m-0 min-h-screen flex justify-center items-center bg-base-200 relative">
      <div class="absolute top-5 right-5 z-[99]">
        <ChangeTheme />
      </div>
      <div class="w-full h-screen xl:h-auto xl:w-[30%] 2xl:w-[25%] 3xl:w-[20%] bg-base-100 rounded-lg shadow-md flex flex-col items-center p-5 pb-7 gap-8 pt-20 xl:pt-7">
        <div class="flex items-center gap-1 xl:gap-2">
          <button
            type='button'
            onClick={() => navigate('/')}
            disabled={/*@once*/ props.disabled ? props.disabled : false}
            class="text-[18px] leading-[1.2] sm:text-lg xl:text-3xl 2xl:text-3xl font-semibold text-base-content dark:text-neutral-200"
          >
            {APP_NAME}
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}