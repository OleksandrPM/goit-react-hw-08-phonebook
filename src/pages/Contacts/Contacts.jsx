import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';
// import { useSelector } from 'react-redux';

export default function Contacts() {
  //   const isLogin = useSelector();
  const isLogin = true; //del

  return isLogin ? (
    <div className={css.app}>
      <ContactForm />
      <section className={css.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  ) : (
    <h2>Please, log in!</h2>
  );
}
