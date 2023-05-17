import { Link } from 'react-router-dom';
import logo from '@assets/img/logo-napisy.svg';
import profile from '@assets/img/profile.svg';
import menu from '@assets/img/menu.svg';
import style from './NavBar.module.css';
import { useState } from 'react';
import AuthService from '@/services/auth.service';

const NavBar = () => {
  const hasUserCookie = document.cookie.includes('user=');
  const [profileActive, setProfileActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div className={style['navbar']}>
      <div className={style['navbar-left']}>
        <Link to='/'>
          <img src={logo} className={style['navbar-logo']} alt='logo' />
        </Link>
      </div>
      <ul className={style['navbar-right']}>
        <li>
          {hasUserCookie && (
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
          )}
        </li>
        <ul
          className={
            profileActive
              ? style['navbar-profile-drop-active']
              : style['navbar-profile-drop']
          }>
          <li>
            <Link to='/settings' className={style['navbar-link']}>
              <span className={style['navbar-dropdown-span']}>Ustawienia</span>
            </Link>
          </li>
          <li>
            <Link to='/achievements' className={style['navbar-link']}>
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
          {!hasUserCookie && (
            <li>
              <Link to='/login' className={style['navbar-link']}>
                <span className={style['navbar-dropdown-span']}>
                  Zaloguj się
                </span>
              </Link>
            </li>
          )}
          {hasUserCookie && (
            <li>
              <span onClick={handleLogout} className={style['navbar-link']}>
                <span className={style['navbar-dropdown-span']}>
                  Wyloguj się
                </span>
              </span>
            </li>
          )}
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
