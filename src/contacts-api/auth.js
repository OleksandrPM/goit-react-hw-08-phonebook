import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signup = async user => {
  return await instanse.post('users/signup', user);
};

export const login = async user => {
  return await instanse.post('users/login', user);
};
