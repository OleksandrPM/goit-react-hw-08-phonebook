import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successRegisterMsg = () =>
  toast.success('You are successfully signed up!');
const errorRegisterMsg = () =>
  toast.error('Something going wrong... Please, try again!');

const successLoginMsg = () => toast.success('You are successfully logged in!');
const errorLoginMsg = () =>
  toast.error('Something going wrong... Please, try again!');

const successLogoutMsg = () =>
  toast.success('You are successfully logged out!');
const errorLogoutMsg = () =>
  toast.error('Something going wrong... Please, try again!');

export {
  successRegisterMsg,
  errorRegisterMsg,
  successLoginMsg,
  errorLoginMsg,
  successLogoutMsg,
  errorLogoutMsg,
};
