import NavBar from '@/components/NavBar/NavBar';
import style from './Login.module.css';

const Login = () => {
	return (
		<div className={style['login-container']}>
			<NavBar />
			<div className={style['login-container-content']}></div>
		</div>
	);
};

export default Login;
