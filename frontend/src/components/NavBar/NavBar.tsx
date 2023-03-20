import { Link } from 'react-router-dom';
import logo from '@assets/img/logo-napisy.svg';
import profile from '@assets/img/profile.svg';
import menu from '@assets/img/menu.svg';
import settings from '@assets/img/settings.svg';
import achievements from '@assets/img/achievements.svg';
import signin from '@assets/img/sign-in.svg';
import signout from '@assets/img/sign-out.svg';
import style from './NavBar.module.css';
import { useState } from 'react';

const NavBar = () => {
  const [profileActive, setProfileActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={style['navbar']}>
      <div className={style['navbar-left']}>
        <Link to='/'>
          <img src={logo} className={style['navbar-logo']} alt='logo' />
        </Link>
      </div>
      <ul className={style['navbar-right']}>
        <li>
          <Link to='#'>
            <img
              src={profile}
              className={style['navbar-profile-icon']}
              alt='profile'
              onClick={() => {
                setProfileActive(!profileActive);
              }}
            />
          </Link>
        </li>
        <ul
          className={
            profileActive
              ? style['navbar-profile-drop-active']
              : style['navbar-profile-drop']
          }>
          <li>
            <img
              src={settings}
              alt='settings'
              className={style['navbar-profile-icon-state']}
            />
          </li>
          <li>
            <img
              src={achievements}
              alt='settings'
              className={style['navbar-profile-icon-state']}
            />
          </li>
        </ul>
        <ul
          className={
            menuActive
              ? style['navbar-menu-drop-active']
              : style['navbar-menu-drop']
          }>
          <li>
            <img
              src={signin}
              alt='signin'
              className={style['navbar-profile-icon-state']}
            />
          </li>
          <li>
            <img
              src={signout}
              alt='signout'
              className={style['navbar-profile-icon-state']}
            />
          </li>
        </ul>
        <li>
          <Link to='#'>
            <img
              src={menu}
              className={style['navbar-menu-icon']}
              alt='menu'
              onClick={() => {
                setMenuActive(!menuActive);
              }}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
