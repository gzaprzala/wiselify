import Footer from '@/components/Footer/Footer';
import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import style from './Settings.module.css';
import { SetStateAction, useRef, useState } from 'react';
import AuthService from '@/services/auth.service';

const saveResults = `${import.meta.env.VITE_BACKEND_URL}api/auth`;

const Settings = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');
  const userId = AuthService.getCurrentUser().id;
  const saveEmailLink = `${saveResults}/change-email/${userId}`;
  const savePasswordLink = `${saveResults}/change-password/${userId}`;

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setNewPassword(e.target.value);
  };

  const handleSubmitEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError('');

    const newEmailValue = emailRef.current?.value;
    if (!newEmailValue) {
      setError('Wprowadź nowy adres email');
      return;
    }

    try {
      const response = await fetch(saveEmailLink, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newEmail: newEmailValue }),
      });

      if (response.ok) {
        setNewEmail('');
      } else {
        const data = await response.json();
        setError(data.message || 'Wystąpił błąd podczas zmiany adresu email');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas zmiany adresu email');
    }
  };

  const handleSubmitPassword = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError('');

    const newPasswordValue = passwordRef.current?.value;
    if (!newPasswordValue) {
      setError('Wprowadź nowe hasło');
      return;
    }

    try {
      const response = await fetch(savePasswordLink, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword: newPasswordValue }),
      });

      if (response.ok) {
        setNewPassword('');
      } else {
        const data = await response.json();
        setError(data.message || 'Wystąpił błąd podczas zmiany hasła');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas zmiany hasła');
    }
  };

  return (
    <div className={style['settings-container']}>
      <NavBar />
      <div className={style['settings-container-content']}>
        <MobileLogo />
        <span className={style['settings-container-content-span']}>
          Ustawienia
        </span>
        <form
          className={style['settings-container-content-form']}
          onSubmit={handleSubmitPassword}>
          <input
            className={style['settings-container-content-form-input']}
            type='password'
            placeholder='Nowe hasło'
            name='password'
            ref={passwordRef}
            value={newPassword}
            onChange={handlePasswordChange}
          />
          <button
            className={style['settings-container-content-form-button']}
            type='submit'>
            Zmień
          </button>
          {error && (
            <div className={style['settings-container-content-error']}>
              {error}
            </div>
          )}
        </form>
        <form
          className={style['settings-container-content-form']}
          onSubmit={handleSubmitEmail}>
          <input
            className={style['settings-container-content-form-input']}
            type='email'
            placeholder='Nowy email'
            name='email'
            ref={emailRef}
            value={newEmail}
            onChange={handleEmailChange}
          />
          <button
            className={style['settings-container-content-form-button']}
            type='submit'>
            Zmień
          </button>
          {error && (
            <div className={style['settings-container-content-error']}>
              {error}
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
