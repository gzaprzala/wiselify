import Footer from '@/components/Footer/Footer';
import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import style from './Login.module.css';

const Login = () => {
  return (
    <div className={style['login-container']}>
      <NavBar />
      <div className={style['login-container-content']}>
        <MobileLogo />
        <span className={style['login-container-content-span']}>Logowanie</span>
        <form className={style['login-container-content-form']} action=''>
          <input
            className={style['login-container-content-form-input']}
            type='text'
            placeholder='login'
          />
          <input
            className={style['login-container-content-form-input']}
            type='password'
            placeholder='hasło'
          />
          <input
            className={style['login-container-content-form-button']}
            type='button'
            value='Zaloguj'
          />
        </form>
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
