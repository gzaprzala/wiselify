import NavBar from '@components/NavBar/NavBar';
import HomeContainer from '@components/HomeContainer/HomeContainer';
import Footer from '@components/Footer/Footer';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style['home']}>
      <NavBar />
      <HomeContainer />
      <Footer />
    </div>
  );
};

export default Home;
