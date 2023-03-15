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
					<Link to='/courses/maths/lesson1'>
						<ThinTile name='1. Wzory skróconego mnożenia' />
					</Link>
					<ThinTile name='2. Twierdzenie Pitagorasa' />
					<ThinTile name='3. Funkcja kwadratowa' />
					<ThinTile name='4. Logarytmy' />
					<ThinTile name='5. Funkcje trygonometryczne' />
					<ThinTile name='6. Permutacje' />
					<ThinTile name='7. Wartość bezwzględna' />
					<ThinTile name='8. Ciąg arytmetyczny' />
					<ThinTile name='9. Ciąg geometryczny' />
				</div>
			</div>
		</div>
	);
};

export default Maths;
