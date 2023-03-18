import { Link } from 'react-router-dom';
import Tile from '@components/Tile/Tile';
import maths from '@assets/img/math.svg';
import history from '@assets/img/history.svg';
import js from '@assets/img/js.svg';
import html from '@assets/img/html.svg';
import style from './HomeContainer.module.css';
import MobileLogo from '../MobileLogo/MobileLogo';

const HomeContainer = () => {
	return (
		<div className={style['home-container']}>
			<MobileLogo />
			<div className={style['home-container-left']}>
				<div className={style['home-container-text-left']}>
					<span className={style['txt-medium']}>Szukasz innego kursu?</span>
					<span className={style['txt-normal']}>
						Pełną listę naszych kursów znajdziesz poniżej
					</span>
					<div className={style['home-container-left-tiles']}>
						<Link to='courses'>
							<button className={style['home-container-courses']}>Kursy</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={style['home-container-right']}>
				<div className={style['home-container-text-right']}>
					<span className={style['txt-medium']}>
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
		</div>
	);
};

export default HomeContainer;
