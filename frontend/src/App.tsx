import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '@views/Home/Home';
import Courses from '@views/Courses/Courses';
import Maths from '@/views/Maths/MathsView/MathsView';
import Login from '@views/Login/Login';
import Register from '@views/Register/Register';
import MathsLessons from '@/views/Maths/MathsLessons/MathsLessons';
import Settings from '@/views/Settings/Settings';
import Achievements from '@/views/Achievements/Achievements';

const App = () => {
  const hasUserCookie = document.cookie.includes('user=');

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route
        path='/courses'
        element={hasUserCookie ? <Courses /> : <Login />}
      />
      <Route
        path='/settings'
        element={hasUserCookie ? <Settings /> : <Login />}
      />
      <Route
        path='/achievements'
        element={hasUserCookie ? <Achievements /> : <Login />}
      />
      <Route
        path='/courses/maths'
        element={hasUserCookie ? <Maths /> : <Login />}
      />
      <Route
        path='/courses/maths/mathslessons/:id'
        element={hasUserCookie ? <MathsLessons /> : <Login />}
      />
    </Routes>
  );
};

export default App;
