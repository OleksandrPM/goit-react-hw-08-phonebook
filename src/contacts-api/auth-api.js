import axios from 'axios';

export const instanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instanse.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instanse.defaults.headers.common['Authorization'];
};

export const signup = async user => {
  const { data } = await instanse.post('users/signup', user);
  if ('token' in data) {
    setToken(data.token);
  }
  return data;
};

export const current = async () => {
  const { data } = await instanse('users/current');
  return data;
};

export const login = async user => {
  const { data } = await instanse.post('users/login', user);
  if ('token' in data) {
    setToken(data.token);
  }
  return data;
};

export const logout = async () => {
  const { data } = await instanse.post('users/logout');
  return data;
};
