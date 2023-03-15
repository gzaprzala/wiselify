import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import logo from '@assets/img/logo-napisy.svg';
import { Link } from 'react-router-dom';
import style from './Maths.module.css';

const Maths = () => {
	return (
		<div className={style['maths-container']}>
			<div className={style['maths-container-mobile']}>
				<Link to='/'>
					<img src={logo} className={style['maths-logo']} alt='logo' />
				</Link>
			</div>
			<NavBar />
			<div className={style['maths-content']}>
				<span className={style['maths-span']}>Dostępne lekcje:</span>
				<div className={style['maths-list']}>
					<ThinTile name='1. Twierdzenie Pitagorasa' />
					<ThinTile name='2. Funkcja kwadratowa' />
					<ThinTile name='3. Logarytmy' />
					<ThinTile name='4. Funkcje trygonometryczne' />
				</div>
			</div>
		</div>
	);
};

export default Maths;
