import { Suspense, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import InvitationText from 'components/InvitationText';
import { ToastContainer } from 'react-toastify';

import { selectToken } from 'redux/auth/authSelectors';
import { setToken } from 'contacts-api/auth-api';
import { fetchContacts } from 'redux/contacts/contactsThunks';

import css from './Layout.module.css';

export default function Layout() {
  const token = useSelector(selectToken); //

  const location = useLocation();
  const isStartPage = location.pathname === '/';

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== '') {
      setToken(token);
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <>
      <ToastContainer />
      <CssBaseline />
      <div className={css.flexPage}>
        <AppBar position="relative">
          <Toolbar className={css.header}>
            <nav className={css.nav}>
              <Link to="/" className={css.logo}>
                <ContactPhoneIcon sx={{ mr: 2 }} className={css.icon} />
                <Typography variant="h6" noWrap>
                  Phonebook
                </Typography>
              </Link>
              <Navigation />
            </nav>
            <Suspense>
              <div>
                <UserMenu />
              </div>
            </Suspense>
          </Toolbar>
        </AppBar>

        {/* <ResponsiveAppBar/> */}

        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 3,
              pb: 3,
            }}
          >
            <Container maxWidth="sm">
              {isStartPage && <InvitationText />}
              <Suspense>
                <Outlet />
              </Suspense>
            </Container>
          </Box>
        </main>

        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 2 }} component="footer">
          <Copyright />
        </Box>
        {/* End footer */}
      </div>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <a href="mailto: olekspm@gmail.com" style={{ color: 'inherit' }}>
        Phonebook by OleksPM
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
