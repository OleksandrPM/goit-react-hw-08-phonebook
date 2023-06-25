import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <ul className={css.navList}>
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
        <li>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
