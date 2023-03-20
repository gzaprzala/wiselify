import Footer from '@/components/Footer/Footer';
import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import style from './Register.module.css';

const Register = () => {
  return (
    <div className={style['register-container']}>
      <NavBar />
      <div className={style['register-container-content']}>
        <MobileLogo />
        <span className={style['register-container-content-span']}>
          Rejestracja
        </span>
        <form className={style['register-container-content-form']} action=''>
          <input
            className={style['register-container-content-form-input']}
            type='text'
            placeholder='login'
          />
          <input
            className={style['register-container-content-form-input']}
            type='text'
            placeholder='email'
          />
          <input
            className={style['register-container-content-form-input']}
            type='password'
            placeholder='hasło'
          />
          <input
            className={style['register-container-content-form-input']}
            type='password'
            placeholder='powtórz hasło'
          />
          <input
            className={style['register-container-content-form-button']}
            type='button'
            value='Zarejestruj'
          />
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
