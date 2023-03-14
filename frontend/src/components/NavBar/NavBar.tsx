import { Link } from 'react-router-dom';
import logo from '@assets/img/logo-napisy.svg';
import profile from '@assets/img/profile.svg';
import menu from '@assets/img/menu.svg';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={style['navbar-header']}>
      <div className={style['navbar-header-left']}>
        <Link to='/'>
          <img src={logo} className={style['navbar-logo']} alt='logo' />
        </Link>
      </div>
      <div className={style['navbar-header-right']}>
        <Link to='/'>
          <img src={profile} className={style['navbar-profile']} alt='profile' />
        </Link>
        <Link to='/'>
          <img src={menu} className={style['navbar-menu']} alt='menu' />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
