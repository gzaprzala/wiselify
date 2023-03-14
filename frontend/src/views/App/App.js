import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomeContainer from '../../components/HomeContainer/HomeContainer';
import Footer from '../../components/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <HomeContainer />
      <Footer />
    </div>
  );
};

export default App;
