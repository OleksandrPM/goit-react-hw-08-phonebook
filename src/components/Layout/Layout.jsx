import { Suspense, lazy } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from 'components/Navigation';
// import UserMenu from 'components/UserMenu';
import InvitationText from 'components/InvitationText';
import css from './Layout.module.css';
// import ResponsiveAppBar from 'components/ResponsiveAppBar';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { instanse, setToken } from 'contacts-api/auth-api';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsThunks';

const UserMenu = lazy(() => import('../UserMenu'));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Layout() {
  const token = useSelector(selectToken); //
  console.log('In store ', token);

  const location = useLocation();
  const isStartPage = location.pathname === '/';

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== '') {
      setToken(token);
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  console.log('In API instanse ', instanse.defaults.headers.common);

  return (
    <ThemeProvider theme={defaultTheme}>
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
    </ThemeProvider>
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
