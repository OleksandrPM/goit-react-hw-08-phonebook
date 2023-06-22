// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
// import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export default App;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
