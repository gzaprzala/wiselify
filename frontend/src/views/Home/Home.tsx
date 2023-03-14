import NavBar from '@components/NavBar/NavBar';
import HomeContainer from '@components/HomeContainer/HomeContainer';
import Footer from '@components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <HomeContainer />
      <Footer />
    </div>
  );
};

export default Home;
