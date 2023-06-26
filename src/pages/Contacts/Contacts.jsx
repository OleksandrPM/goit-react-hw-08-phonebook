import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';
import InvitationText from 'components/InvitationText/InvitationText';
import { useSelector } from 'react-redux';

export default function Contacts() {
  const isAuth = useSelector(state => state.auth.access_token);

  return isAuth ? (
    <div className={css.app}>
      <ContactForm />
      <section className={css.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  ) : (
    <InvitationText />
  );
}
