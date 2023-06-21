import axios from 'axios';

axios.defaults.baseURL = 'https://648b6c3117f1536d65eaefae.mockapi.io';

export function getContactsApi() {
  try {
    return axios.get('/contacts');
  } catch (error) {
    console.log(error);
  }
}

export function addContactApi({ name, phone }) {
  try {
    return axios.post('/contacts', {
      name: name,
      phone: phone,
    });
  } catch (error) {
    console.log(error);
  }
}

export function deleteContactApi(contactId) {
  try {
    return axios.delete(`/contacts/${contactId}`);
  } catch (error) {
    console.log(error);
  }
}

//Too much requests problem
export function deleteAllApi(contacts) {
  return Promise.all(
    contacts.map(async ({ id }) => {
      return deleteContactApi(id).then(data => {
        return data;
      });
    })
  );
}
