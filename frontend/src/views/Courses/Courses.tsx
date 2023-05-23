import { Link, useNavigate } from 'react-router-dom';
import NavBar from '@components/NavBar/NavBar';
import Tile from '@components/Tile/Tile';
import maths from '@assets/img/math.svg';
import history from '@assets/img/history.svg';
import js from '@assets/img/js.svg';
import html from '@assets/img/html.svg';
import physics from '@assets/img/physics.svg';
import java from '@assets/img/java.svg';
import python from '@assets/img/python.svg';
import geo from '@assets/img/geo.svg';
import chem from '@assets/img/chem.svg';
import biol from '@assets/img/biology.svg';
import style from './Courses.module.css';
import MobileLogo from '@/components/MobileLogo/MobileLogo';

const Courses = () => {
  return (
    <div className={style['courses']}>
      <MobileLogo />
      <NavBar />
      <div className={style['courses-content']}>
        <span className={style['courses-span']}>Lista kursów:</span>
        <div className={style['courses-list']}>
          <Link to='/courses/maths'>
            <Tile name='Matematyka' image={maths} />
          </Link>
          <Link to='/courses/history'>
            <Tile name='Historia' image={history} />
          </Link>
          <Link to='/courses/javascript'>
            <Tile name='JavaScript' image={js} />
          </Link>
          <Link to='/courses/html'>
            <Tile name='HTML' image={html} />
          </Link>
          <Link to='/courses/java'>
            <Tile name='Java' image={java} />
          </Link>
          <Link to='/courses/python'>
            <Tile name='Python' image={python} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
