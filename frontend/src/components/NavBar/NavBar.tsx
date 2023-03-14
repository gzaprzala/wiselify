import logo from '@assets/img/logo-napisy.svg';
import profile from '@assets/img/profile.svg';
import menu from '@assets/img/menu.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar-header'>
      <div className='navbar-header-left'>
        <a href='/'>
          <img src={logo} className='navbar-logo' alt='logo' />
        </a>
      </div>
      <div className='navbar-header-right'>
        <a href='/'>
          <img src={profile} className='navbar-profile' alt='profile' />
        </a>
        <a href='/'>
          <img src={menu} className='navbar-menu' alt='menu' />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
