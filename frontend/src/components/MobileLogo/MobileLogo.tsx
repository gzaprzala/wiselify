import { Link } from 'react-router-dom';
import style from './MobileLogo.module.css';
import logo from '@assets/img/logo-napisy.svg';

const MobileLogo = () => {
  return (
    <div className={style['mobile-logo-container']}>
      <Link to='/'>
        <img src={logo} className={style['mobile-logo']} alt='logo' />
      </Link>
    </div>
  );
};

export default MobileLogo;
