import { Routes, Route } from 'react-router-dom';
import Home from '@views/Home/Home';
import Courses from './views/Courses/Courses';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
  );
};

export default App;
