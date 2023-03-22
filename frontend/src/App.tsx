import { Routes, Route } from 'react-router-dom';
import Home from '@views/Home/Home';
import Courses from '@views/Courses/Courses';
import Maths from '@views/Maths/view/Maths';
import Login from '@views/Login/Login';
import Register from '@views/Register/Register';
import MathLessons from '@/views/Maths/lessons/MathLessons/MathLessons';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/maths' element={<Maths />} />
      <Route path='/courses/maths/mathlessons/:id' element={<MathLessons />} />
    </Routes>
  );
};

export default App;
