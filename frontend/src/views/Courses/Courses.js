import { Link } from 'react-router-dom';
import './Courses.css';
import NavBar from '../../components/NavBar/NavBar';
import Tile from '../../components/Tile/Tile';
import maths from '../../assets/img/math.svg';
import history from '../../assets/img/history.svg';
import js from '../../assets/img/js.svg';
import html from '../../assets/img/html.svg';
import physics from '../../assets/img/physics.svg';
import java from '../../assets/img/java.svg';
import python from '../../assets/img/python.svg';
import geo from '../../assets/img/geo.svg';
import chem from '../../assets/img/chem.svg';
import biol from '../../assets/img/biology.svg';
import logo from '../../assets/img/logo-napisy.svg';

const Courses = () => {
  return (
    <div className='courses'>
      <div className='courses-container-mobile'>
        <Link to='/'>
          <img src={logo} className='courses-logo' alt='logo' />
        </Link>
      </div>
      <NavBar className='courses-nav' />
      <div className='courses-content'>
        <span className='courses-span'>Lista kursów:</span>
        <div className='courses-list'>
          <Link to='/'>
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
          <Link to='/'>
            <Tile name='Fizyka' image={physics} />
          </Link>
          <Link to='/'>
            <Tile name='Java' image={java} />
          </Link>
          <Link to='/'>
            <Tile name='Python' image={python} />
          </Link>
          <Link to='/'>
            <Tile name='Geografia' image={geo} />
          </Link>
          <Link to='/'>
            <Tile name='Chemia' image={chem} />
          </Link>
          <Link to='/'>
            <Tile name='Biologia' image={biol} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
