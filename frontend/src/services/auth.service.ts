import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const register = (username: String, email: String, password: String) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  });
};

const login = (username: String, password: String) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        document.cookie = `user=${JSON.stringify(response.data)}; path=/`;
      }

      return response.data;
    });
};

const logout = () => {
  document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  return axios.post(API_URL + 'signout').then((response) => {
    window.location.href = '/login';
    return response.data;
  });
};

const getCurrentUser = () => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('user='));
  if (cookieValue) {
    const userData = decodeURIComponent(cookieValue.split('=')[1]);
    return JSON.parse(userData);
  }
  return null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
