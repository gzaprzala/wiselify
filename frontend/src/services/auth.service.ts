const API_URL = 'http://localhost:8080/api/auth/';

const register = async (username: string, email: string, password: string) => {
  const response = await fetch(API_URL + 'signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  return await response.json();
};

const login = async (username: string, password: string) => {
  const response = await fetch(API_URL + 'signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();
  if (data.username) {
    document.cookie = `user=${JSON.stringify(data)}; path=/`;
  }
  return data;
};

const logout = async () => {
  document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  const response = await fetch(API_URL + 'signout', {
    method: 'POST',
  });
  return await response.json();
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
