import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import HomeContainer from '../../components/HomeContainer/HomeContainer';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <HomeContainer />
      <Footer />
    </div>
  );
};

export default Home;
