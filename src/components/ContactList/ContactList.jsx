import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { deleteAll} from 'redux/contacts/contactsOperations';
import Contact from './Contact';
import css from './ContactList.module.css';

const downloadingMsg = 'Contacts are loading...';
const errorMsg = 'Ups... Something goes wrong: ';
const noContactsMsg = 'There are no contacts in contact list';
const noContactsByRequestMsg = 'No contacts were found for your request';

export default function ContactList() {
  const { items, isLoading, error } = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const sendDeleteAll = () => {
    dispatch(deleteAll(items));
  };

  return (
    <>
      {isLoading && <p>{downloadingMsg}</p>}
      {error && <p>{`${errorMsg}${error}`}</p>}
      {items.length > 0 ? (
        contacts.length > 0 ? (
          <>
            <ul className={css.contact_list}>
              {contacts.map(contact => {
                const { id, name, phone } = contact;
                return (
                  <li className={css.contact_item} key={id}>
                    <Contact name={name} number={phone} id={id} />
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={sendDeleteAll}
              className={css.delete_all_btn}
            >
              Delete all contacts
            </button>
          </>
        ) : (
          <p>{noContactsByRequestMsg}</p>
        )
      ) : (
        !isLoading && <p>{noContactsMsg}</p>
      )}
    </>
  );
}
