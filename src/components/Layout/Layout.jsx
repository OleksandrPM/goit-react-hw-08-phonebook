// import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

// const Loader = lazy(() => import('../Loader'));

export default function Layout() {
  const isLogin = true; //change on data from store

  return (
    <div className={css.page}>
      <header className={css.head}>
        <div className={css.container}>
          <h2>Phonebook</h2>
          <Navigation />
          {isLogin && <UserMenu />}
        </div>
      </header>
      <main>
        <div className={css.container}>
          {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
          {/* </Suspense> */}
        </div>
      </main>
    </div>
  );
}
