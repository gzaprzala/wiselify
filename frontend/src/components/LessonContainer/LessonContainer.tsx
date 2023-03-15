import NavBar from '@/components/NavBar/NavBar';
import logo from '@assets/img/logo-napisy.svg';
import arrowleft from '@assets/img/arrow-left.svg';
import arrowright from '@assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';
import style from './LessonContainer.module.css';

const LessonContainer = (props: {
	name: String;
	lesson: String;
	topic: String;
}) => {
	return (
		<div className={style['lesson-container']}>
			<div className={style['lesson-container-mobile']}>
				<Link to='/'>
					<img src={logo} className={style['lesson-logo']} alt='logo' />
				</Link>
			</div>
			<NavBar />
			<div className={style['lesson-content']}>
				<div className={style['lesson-content-upper']}>
					<Link to='/courses/maths/lesson1'>
						<img src={arrowleft} alt='left' className={style['lesson-arrow']} />
					</Link>
					<div className={style['lesson-content-upper-text']}>
						<span className={style['lesson-span']}>{props.name}</span>
						<span className={style['lesson-span']}>{props.lesson}</span>
					</div>
					<Link to='/courses/maths/lesson1'>
						<img
							src={arrowright}
							alt='right'
							className={style['lesson-arrow']}
						/>
					</Link>
				</div>
				<div className={style['lesson-main']}>
					<span className={style['lesson-span-color']}>{props.topic}</span>
					<div className={style['lesson-span-normal']}>...</div>
				</div>
			</div>
		</div>
	);
};

export default LessonContainer;
