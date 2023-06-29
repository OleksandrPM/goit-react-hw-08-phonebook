import { instanse } from './auth-api';

export function getContactsApi() {
  try {
    return instanse('/contacts');
  } catch (error) {
    console.log(error);
  }
}

export function addContactApi({ name, number }) {
  try {
    return instanse.post('/contacts', {
      name: name,
      number: number,
    });
  } catch (error) {
    console.log(error);
  }
}

export function deleteContactApi(contactId) {
  try {
    return instanse.delete(`/contacts/${contactId}`);
  } catch (error) {
    console.log(error);
  }
}

export function updateContactApi(contactId, newName, newNumber) {
  try {
    return instanse.patch(`/contacts/${contactId}`, {
      name: newName,
      number: newNumber,
    });
  } catch (error) {
    console.log(error);
  }
}
