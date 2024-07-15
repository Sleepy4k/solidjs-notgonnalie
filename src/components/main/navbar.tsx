import { alert } from '@utils';
import { Auth } from '@contexts';
import { A } from '@solidjs/router';
import SwalConfirm from '../swal.confirm';
import { ESwalConfirmType } from '@enums';
import { Match, Show, Switch } from 'solid-js';
import ChangeTheme from '@components/change.theme';

interface INavBarProps {
  disabled?: boolean;
}

export default function NavBar(props: INavBarProps) {
  const { user, isLogged, logoutUser } = Auth.useAuth();

  const handleActive = (path: string) => {
    return location.hash.split('#')[1] === path ? 'active' : '';
  }

  const handleLogout = () => {
    alert.fire({
      title: 'Konfirmasi',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      html: SwalConfirm(ESwalConfirmType.LOGOUT) as HTMLElement
    }).then((result: any) => {
      if (result.isConfirmed) logoutUser();
    });
  };

  const GuestNavLink = (isMobile: boolean) => (
    <Switch>
      <Match when={!props.disabled}>
        <li>
          <A href='/' end>Home</A>
        </li>
        <li>
          <A href='/contact'>Hubungi Kami</A>
        </li>
        <li>
          <A href='/changelogs' >ChangeLogs</A>
        </li>

        <Show when={isMobile}>
          <li>
            <A href='/login'>Login</A>
          </li>
        </Show>
      </Match>

      <Match when={props.disabled}>
        <li>
          <span class={handleActive('/')}>Home</span>
        </li>
        <li>
          <span class={handleActive('/contact')}>Hubungi Kami</span>
        </li>
        <li>
          <span class={handleActive('/changelogs')}>ChangeLogs</span>
        </li>

        <Show when={isMobile}>
          <li>
            <span class={handleActive('/login')}>Login</span>
          </li>
        </Show>
      </Match>
    </Switch>
  );

  const AuthNavBar = (isMobile: boolean) => (
    <Switch>
      <Match when={!props.disabled}>
        <li>
          <A href='/' end>Home</A>
        </li>
        <li>
          <A href='/question'>QnA</A>
        </li>
        <li>
          <A href='/contact'>Hubungi Kami</A>
        </li>
        <li>
          <A href='/changelogs' >ChangeLogs</A>
        </li>

        <Show when={isMobile}>
          <li>
            <button
              type='button'
              title='Logout Button'
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </Show>
      </Match>

      <Match when={props.disabled}>
        <li>
          <span class={handleActive('/')}>Home</span>
        </li>
        <li>
          <span class={handleActive('/question')}>QnA</span>
        </li>
        <li>
          <span class={handleActive('/contact')}>Hubungi Kami</span>
        </li>
        <li>
          <span class={handleActive('/changelogs')}>ChangeLogs</span>
        </li>

        <Show when={isMobile}>
          <li>
            <button
              type='button'
              title='Logout Button'
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </Show>
      </Match>
    </Switch>
  );

  const NavLink = (isMobile: boolean = false) => (
    <>
      <Show when={isLogged()}>
        {AuthNavBar(isMobile)}
      </Show>

      <Show when={!isLogged()}>
        {GuestNavLink(isMobile)}
      </Show>
    </>
  );

  return (
    <div class="fixed navbar bg-base-300 z-50 flex justify-center">
      <div class="absolute top-5 right-5">
        <ChangeTheme />
      </div>
      <div class='navbar w-[85vw]'>
        <div class="navbar-start">
          <A href='/' class="btn btn-ghost">
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/solidjs/templates/main/ts/src/logo.svg"
              alt="Logo SolidJS"
              class='lg:w-[2.5rem] w-9 lg:h-[2.5rem] h-9'
            />
          </A>
          <Show when={isLogged()}>
            <span class="lg:text-lg text-sm font-bold">Hello, {user()?.name}</span>
          </Show>
          <Show when={!isLogged()}>
            <span class="lg:text-lg text-sm font-bold">Welcome</span>
          </Show>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1 lg:text-md gap-2">
            {NavLink()}
          </ul>
        </div>
        <div class="navbar-end">
          <div class="hidden lg:block relative rounded-2xl overflow-hidden h-[3rem] w-[5rem]">
            <Show when={isLogged()}>
              <button
                type='button'
                title='Logout Button'
                class="btn btn-ghost"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Show>

            <Show when={!isLogged()}>
              <A href='/login' class="btn btn-ghost">Login</A>
            </Show>
          </div>
          <div class="dropdown dropdown-end">
            <div
              title="Menu"
              tabindex="0"
              role="button"
              class="btn btn-ghost lg:hidden me-[1.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {NavLink(true)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
