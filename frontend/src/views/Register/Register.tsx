import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import NavBar from '@/components/NavBar/NavBar';
import MobileLogo from '@/components/MobileLogo/MobileLogo';
import Footer from '@/components/Footer/Footer';
import AuthService from '@/services/auth.service';

const Register = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const username = usernameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const passwordConfirm = passwordConfirmRef.current?.value || '';

    if (
      username === null ||
      email === null ||
      password === null ||
      passwordConfirm === null
    ) {
      setError('Wypełnij wszystkie pola');
      return;
    }

    if (password !== passwordConfirm) {
      setError('Hasła nie są takie same');
      return;
    }

    if (!validateUsername(username)) {
      setError('Nazwa użytkownika powinna zawierać od 8 do 20 znaków');
      return;
    }

    if (!validateEmail(email)) {
      setError('Nieprawidłowy adres email');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Hasło powinno zawierać od 8 do 50 znaków oraz przynajmniej jedną wielką literę, jeden znak specjalny i cyfrę'
      );
      return;
    }

    const data = await AuthService.register(username, email, password).then(
      () => {
        window.location.href = '/login';
      },
      (error) => {
        setError(
          'Nazwa użytkownika powinna zawierać od 8 do 20 znaków, hasło powinno zawierać od 8 do 50 znaków oraz przynajmniej jedną wielką literę, jeden znak specjalny i cyfrę.'
        );
      }
    );
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username: string) => {
    const usernameRegex = /^.{8,20}$/;
    return usernameRegex.test(username);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&+=]).{8,50}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className={style['register-container']}>
      <NavBar />
      <div className={style['register-container-content']}>
        <MobileLogo />
        <span className={style['register-container-content-span']}>
          Rejestracja
        </span>
        <form
          className={style['register-container-content-form']}
          onSubmit={handleSubmit}>
          <input
            className={style['register-container-content-form-input']}
            type='text'
            placeholder='login'
            name='username'
            ref={usernameRef}
          />
          <input
            className={style['register-container-content-form-input']}
            type='text'
            placeholder='email'
            name='email'
            ref={emailRef}
          />
          <input
            className={style['register-container-content-form-input']}
            type='password'
            placeholder='hasło'
            name='password'
            ref={passwordRef}
          />
          <input
            className={style['register-container-content-form-input']}
            type='password'
            placeholder='powtórz hasło'
            name='confirmPassword'
            ref={passwordConfirmRef}
          />
          <button
            className={style['register-container-content-form-button']}
            type='submit'>
            Zarejestruj
          </button>
          {error && (
            <div className={style['register-container-content-error']}>
              {error}
            </div>
          )}
        </form>
        <Link to='/login'>
          <span className={style['register-container-content-span-mini']}>
            Zaloguj się
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
