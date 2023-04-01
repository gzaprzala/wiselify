import Footer from '@/components/Footer/Footer';
import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import AuthService from '@/services/auth.service';
import { useRef, useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const username = usernameRef.current?.value || '';
    const password = passwordRef.current?.value || '';

    const data = await AuthService.login(username, password);

    if (data.username) {
      navigate('/');
    } else {
      setError('Nieprawidłowa nazwa użytkownika lub hasło');
    }
  };

  return (
    <div className={style['login-container']}>
      <NavBar />
      <div className={style['login-container-content']}>
        <MobileLogo />
        <span className={style['login-container-content-span']}>Logowanie</span>
        <form
          className={style['login-container-content-form']}
          onSubmit={handleSubmit}>
          <input
            className={style['login-container-content-form-input']}
            type='text'
            placeholder='login'
            name='username'
            ref={usernameRef}
          />
          <input
            className={style['login-container-content-form-input']}
            type='password'
            placeholder='hasło'
            name='password'
            ref={passwordRef}
          />
          <button
            className={style['login-container-content-form-button']}
            type='submit'>
            Zaloguj
          </button>
        </form>
        {error && (
          <div className={style['login-container-content-error']}>{error}</div>
        )}
        <Link to='/register'>
          <span className={style['login-container-content-span-mini']}>
            Zarejestruj się
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
