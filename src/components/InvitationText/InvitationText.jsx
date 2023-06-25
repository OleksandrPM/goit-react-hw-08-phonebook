const { Typography } = require('@mui/material');
const { Link, useLocation } = require('react-router-dom');

export default function InvitationText() {
  const location = useLocation();
  const isContactsPage = location.pathname === '/contacts';
  return (
    <>
      {isContactsPage && (
        <Typography
          component="h3"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          It looks like you are not logged in. Only authorized users can use the
          application.
        </Typography>
      )}
      <Typography
        component="h3"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        To be able to use the application, please{' '}
        <Link to="/register">register</Link>!
      </Typography>
      <Typography
        component="h3"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Already have an account? Please <Link to="/login">login</Link>!
      </Typography>
    </>
  );
}
