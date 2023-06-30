import { deleteToken } from 'contacts-api/auth-api';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authThunks';
import {
  errorLogoutMsg,
  successLogoutMsg,
} from 'toast-messadges/toast-messadges';

import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        deleteToken();
        successLogoutMsg();
      })
      .catch(() => {
        errorLogoutMsg();
      });
  };

  return (
    user && (
      <div className={css.menu}>
        <p>{user.email}</p>
        <button className={css.btn} onClick={handleOnClick}>
          Logout
        </button>
      </div>
    )
  );
}
