import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style['footer']}>
      <div className={style['footer-box']}>
        <div className={style['footer-box-links']}>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>kontakt</span>
          </Link>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>wesprzyj</span>
          </Link>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>github</span>
          </Link>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>prywatność</span>
          </Link>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>cookies</span>
          </Link>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>regulamin</span>
          </Link>
          <Link to='/' className={style['footer-box-links-link']}>
            <span>discord</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
