import { routes } from './routes';
import { fireApp } from '@services';
import { Toaster } from 'solid-toast';
import { HashRouter } from '@solidjs/router';
import { MetaProvider } from '@solidjs/meta';
import { Auth, Meta, Theme } from '@contexts';
import { FirebaseProvider } from 'solid-firebase';
import { Suspense, type Component } from 'solid-js';

const App: Component = () => {
  return (
    <FirebaseProvider app={fireApp}>
      <MetaProvider>
        <main class="min-h-screen">
          <HashRouter root={(props) => (
            <Suspense fallback={
              <div class="flex justify-center items-center h-screen">
                <span class="loading loading-ring loading-lg h-32 w-32 border-t-2 border-b-2" />
              </div>
            }>
              <Auth.AuthProvider>
                <Meta.MetaProvider>
                  <Theme.ThemeProvider>
                    <Toaster />
                    {props.children}
                  </Theme.ThemeProvider>
                </Meta.MetaProvider>
              </Auth.AuthProvider>
            </Suspense>
          )}>
            {routes}
          </HashRouter>
        </main>
      </MetaProvider>
    </FirebaseProvider>
  );
};

export default App;
