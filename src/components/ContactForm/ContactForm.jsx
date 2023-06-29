import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts/contactsSelectors';
import css from './ContactForm.module.css';
import { addContact } from 'redux/contacts/contactsThunks';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const onFormBtnClick = event => {
    event.preventDefault();
    const form = event.currentTarget;
    sendAddContact();
    form.reset();
  };

  const sendAddContact = () => {
    if (!isContactPresent(name, number, items)) {
      dispatch(addContact({ name, number }))
        .unwrap()
        .then()
        .catch(e => {
          console.log(e);
          alert(`Error: ${e}`);
        });
    } else {
      alert(`${name} is already in the contacts`);
    }
  };

  const onInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value.trim());
    }
    if (name === 'number') {
      setNumber(value.trim());
    }
  };

  return (
    <form onSubmit={onFormBtnClick} className={css.form}>
      <label className={css.form_label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.form_label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          onChange={onInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

function isContactPresent(name, number, items) {
  if (items.length > 0) {
    return items.find(
      item =>
        item.name.toLowerCase() === name.toLowerCase() && item.phone === number
    );
  } else {
    return false;
  }
}
