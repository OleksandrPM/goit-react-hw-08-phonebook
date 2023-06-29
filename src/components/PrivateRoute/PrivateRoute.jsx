import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
  const isAuth = useSelector(selectToken);
  return isAuth ? children : <Navigate to="/login" />;
}
