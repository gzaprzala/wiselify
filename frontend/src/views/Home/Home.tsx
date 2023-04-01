import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import Tile from '@components/Tile/Tile';
import maths from '@assets/img/math.svg';
import history from '@assets/img/history.svg';
import js from '@assets/img/js.svg';
import html from '@assets/img/html.svg';
import MobileLogo from '@/components/MobileLogo/MobileLogo';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import AuthService from '@/services/auth.service';

const currentUser = AuthService.getCurrentUser();

const Home = () => {
  return (
    <div className={style['home']}>
      <NavBar />
      <div className={style['home-container']}>
        <MobileLogo />
        <div className={style['home-container-left']}>
          <div className={style['home-container-left-text']}>
            <span className={style['home-container-left-text-medium']}>
              Szukasz innego kursu?
            </span>
            <span className={style['home-container-left-text-normal']}>
              Pełną listę naszych kursów znajdziesz poniżej
            </span>
          </div>
          <div className={style['home-container-left-tiles']}>
            <Link to='courses'>
              <button className={style['home-container-left-tiles-courses']}>
                Kursy
              </button>
            </Link>
          </div>
        </div>
        <div className={style['home-container-right']}>
          <div className={style['home-container-right-text']}>
            <span className={style['home-container-right-text-medium']}>
              Czego chcesz się dziś nauczyć?
            </span>
          </div>
          <div className={style['home-container-right-tiles']}>
            <Link to='/courses/maths'>
              <Tile name='Matematyka' image={maths} />
            </Link>
            <Link to='/'>
              <Tile name='Historia' image={history} />
            </Link>
            <Link to='/'>
              <Tile name='JavaScript' image={js} />
            </Link>
            <Link to='/'>
              <Tile name='HTML' image={html} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
