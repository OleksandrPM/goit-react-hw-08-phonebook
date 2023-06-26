import axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instanse.defaults.headers.common['Authorization'] = token;
};

export const signup = async user => {
  return await instanse.post('users/signup', user);
};

export const current = async () => {
  const { data } = await instanse('users/current');
  return data;
};

export const login = async user => {
  const { data } = await instanse.post('users/login', user);
  if ('token' in data) {
    setToken(`Bearer ${data.token}`);
  }
  return data;
};

export const logout = async () => await instanse.post('users/logout');
