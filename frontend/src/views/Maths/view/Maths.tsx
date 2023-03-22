import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './Maths.module.css';

const Maths = () => {
  return (
    <div className={style['maths-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['maths-content']}>
        <span className={style['maths-span']}>Dostępne lekcje:</span>
        <div className={style['maths-list']}>
          <Link to='/courses/maths/mathlessons'>
            <ThinTile name='1. Wzory skróconego mnożenia' />
          </Link>
          <Link to='/courses/maths/mathlessons'>
            <ThinTile name='2. Ciąg geometryczny' />
          </Link>
          <Link to='/courses/maths/mathlessons'>
            <ThinTile name='3. Twierdzenie Pitagorasa' />
          </Link>
          <Link to='/courses/maths/mathlessons'>
            <ThinTile name='4. Funkcja kwadratowa' />
          </Link>
          <Link to='/courses/maths/mathlessons'>
            <ThinTile name='5. Logarytmy' />
          </Link>
          <Link to='/courses/maths/mathlessons'>
            <ThinTile name='6. Funkcje trygonometryczne' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Maths;
