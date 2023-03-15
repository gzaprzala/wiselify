import { Link } from 'react-router-dom';
import Tile from '@components/Tile/Tile';
import maths from '@assets/img/math.svg';
import history from '@assets/img/history.svg';
import js from '@assets/img/js.svg';
import html from '@assets/img/html.svg';
import logo from '@assets/img/logo-napisy.svg';
import style from './HomeContainer.module.css';

const HomeContainer = () => {
	return (
		<div className={style['home-container']}>
			<div className={style['home-container-mobile']}>
				<Link to='/'>
					<img src={logo} className={style['home-logo']} alt='logo' />
				</Link>
			</div>
			<div className={style['home-container-left']}>
				<div className={style['home-container-left-text']}>
					<span className={style['txt-medium']}>Szukasz innego kursu?</span>
					<span className={style['txt-normal']}>
						Pełną listę naszych kursów znajdziesz poniżej
					</span>
					<Link to='courses'>
						<button className={style['home-container-kursy']}>Kursy</button>
					</Link>
				</div>
			</div>
			<div className={style['home-container-right']}>
				<span className={style['home-container-right-text']}>
					Czego chcesz się dziś nauczyć?
				</span>
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
	);
};

export default HomeContainer;
