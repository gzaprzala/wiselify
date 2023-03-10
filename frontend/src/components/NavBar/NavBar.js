import './NavBar.css';
import logo from '../../assets/logo-napisy.png';
import profile from '../../assets/profile.png';
import menu from '../../assets/menu.png';

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
