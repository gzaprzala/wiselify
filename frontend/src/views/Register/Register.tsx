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

    const data = await AuthService.register(username, email, password).then(
      () => {
        window.location.href = '/login';
      },
      (error) => {
        setError(
          'Podano złe dane. Nazwa użytkownika (3-20 znaków) lub hasło (6-40 znaków)'
        );
      }
    );
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
