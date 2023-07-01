import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export default function Navigation() {
  const isAuth = useSelector(selectToken);
  return (
    <nav>
      <ul className={css.navList}>
        {!isAuth && (
          <>
            <li>
              <NavLink to="/register" className={css.navLink}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={css.navLink}>
                Log in
              </NavLink>
            </li>
          </>
        )}
        {isAuth && (
          <li>
            <NavLink to="/contacts" className={css.navLink}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
