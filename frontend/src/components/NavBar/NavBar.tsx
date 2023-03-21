import { Link } from 'react-router-dom';
import logo from '@assets/img/logo-napisy.svg';
import profile from '@assets/img/profile.svg';
import menu from '@assets/img/menu.svg';
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
          <img
            src={profile}
            className={style['navbar-profile-icon']}
            alt='profile'
            onClick={() => {
              menuActive
                ? setMenuActive(!menuActive)
                : setMenuActive(menuActive);
              setProfileActive(!profileActive);
            }}
          />
        </li>
        <ul
          className={
            profileActive
              ? style['navbar-profile-drop-active']
              : style['navbar-profile-drop']
          }>
          <li>
            <Link to='#' className={style['navbar-link']}>
              <span className={style['navbar-dropdown-span']}>Ustawienia</span>
            </Link>
          </li>
          <li>
            <Link to='#' className={style['navbar-link']}>
              <span className={style['navbar-dropdown-span']}>Osiągnięcia</span>
            </Link>
          </li>
        </ul>
        <ul
          className={
            menuActive
              ? style['navbar-menu-drop-active']
              : style['navbar-menu-drop']
          }>
          <li>
            <Link to='/login' className={style['navbar-link']}>
              <span className={style['navbar-dropdown-span']}>Zaloguj się</span>
            </Link>
          </li>
          <li>
            <Link to='#' className={style['navbar-link']}>
              <span className={style['navbar-dropdown-span']}>Wyloguj się</span>
            </Link>
          </li>
        </ul>
        <li>
          <Link to='#' className={style['navbar-link']}>
            <img
              src={menu}
              className={style['navbar-menu-icon']}
              alt='menu'
              onClick={() => {
                profileActive
                  ? setProfileActive(!profileActive)
                  : setProfileActive(profileActive);
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
