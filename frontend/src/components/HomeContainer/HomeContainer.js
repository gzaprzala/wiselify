import './HomeContainer.css';
import Tile from '../Tile/Tile';
import maths from '../../assets/img/math.svg';
import history from '../../assets/img/history.svg';
import js from '../../assets/img/js.svg';
import html from '../../assets/img/html.svg';
import logo from '../../assets/img/logo-napisy.svg';

const HomeContainer = () => {
  return (
    <div className='home-container'>
      <div className='home-container-mobile'>
        <a href='/'>
          <img src={logo} className='home-logo' alt='logo' />
        </a>
      </div>
      <div className='home-container-left'>
        <div className='home-container-left-text'>
          <span className='txt-medium'>Szukasz innego kursu?</span>
          <span className='txt-normal'>
            Pełną listę naszych kursów znajdziesz poniżej
          </span>
          <button className='home-container-kursy'>Kursy</button>
        </div>
      </div>
      <div className='home-container-right'>
        <span className='home-container-right-text'>
          Czego chcesz się dziś nauczyć?
        </span>
        <div className='home-container-right-tiles'>
          <a href='/'>
            <Tile name='Matematyka' image={maths} />
          </a>
          <a href='/'>
            <Tile name='Historia' image={history} />
          </a>
          <a href='/'>
            <Tile name='JavaScript' image={js} />
          </a>
          <a href='/'>
            <Tile name='HTML' image={html} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
