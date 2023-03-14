import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
  );
};

export default App;
