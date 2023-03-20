import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import support from '@assets/img/support.svg';
import donate from '@assets/img/donate.svg';
import code from '@assets/img/code.svg';
import shield from '@assets/img/shield.svg';
import cookie from '@assets/img/cookie.svg';
import book from '@assets/img/book.svg';
import discord from '@assets/img/discord.svg';

const Footer = () => {
  return (
    <div className={style['footer']}>
      <div className={style['footer-box']}>
        <div className={style['footer-box-links']}>
          <ul>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>kontakt</span>
                <img src={support} alt='kontakt' />
              </Link>
            </li>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>wesprzyj</span>
                <img src={donate} alt='wesprzyj' />
              </Link>
            </li>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>github</span>
                <img src={code} alt='github' />
              </Link>
            </li>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>prywatność</span>
                <img src={shield} alt='privacy' />
              </Link>
            </li>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>cookies</span>
                <img src={cookie} alt='cookies' />
              </Link>
            </li>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>regulamin</span>
                <img src={book} alt='terms' />
              </Link>
            </li>
            <li>
              <Link to='/' className={style['footer-box-links-link']}>
                <span className={style['title']}>discord</span>
                <img src={discord} alt='discord' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
