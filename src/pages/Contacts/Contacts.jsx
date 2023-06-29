import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.app}>
      <ContactForm />
      <section className={css.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
}
