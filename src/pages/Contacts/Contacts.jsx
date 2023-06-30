import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.contacts_page}>
      <ContactForm />
      <div className={css.contacts_list}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
