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
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='1. Wzory skróconego mnożenia' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='2. Twierdzenie Pitagorasa' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='2. Twierdzenie Pitagorasa' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='3. Funkcja kwadratowa' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='4. Logarytmy' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='5. Funkcje trygonometryczne' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='6. Permutacje' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='7. Wartość bezwzględna' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='8. Ciąg arytmetyczny' />
          </Link>
          <Link to='/courses/maths/lesson1'>
            <ThinTile name='9. Ciąg geometryczny' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Maths;
