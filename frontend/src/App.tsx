import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '@views/Home/Home';
import Courses from '@views/Courses/Courses';
import MathsView from '@/views/Maths/MathsView/MathsView';
import HtmlView from '@/views/Html/HtmlView/HtmlView';
import Login from '@views/Login/Login';
import Register from '@views/Register/Register';
import MathsLessons from '@/views/Maths/MathsLessons/MathsLessons';
import HtmlLessons from '@/views/Html/HtmlLessons/HtmlLessons';
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
        element={hasUserCookie ? <MathsView /> : <Login />}
      />
      <Route
        path='/courses/maths/mathslessons/:id'
        element={hasUserCookie ? <MathsLessons /> : <Login />}
      />
      <Route
        path='/courses/html'
        element={hasUserCookie ? <HtmlView /> : <Login />}
      />
      <Route
        path='/courses/html/htmllessons/:id'
        element={hasUserCookie ? <HtmlLessons /> : <Login />}
      />
      <Route
        path='/courses/html'
        element={hasUserCookie ? <HtmlView /> : <Login />}
      />
      <Route
        path='/courses/html/htmllessons/:id'
        element={hasUserCookie ? <HtmlLessons /> : <Login />}
      />
      <Route
        path='/courses/html'
        element={hasUserCookie ? <HtmlView /> : <Login />}
      />
      <Route
        path='/courses/html/htmllessons/:id'
        element={hasUserCookie ? <HtmlLessons /> : <Login />}
      />
      <Route
        path='/courses/html'
        element={hasUserCookie ? <HtmlView /> : <Login />}
      />
      <Route
        path='/courses/html/htmllessons/:id'
        element={hasUserCookie ? <HtmlLessons /> : <Login />}
      />
      <Route
        path='/courses/html'
        element={hasUserCookie ? <HtmlView /> : <Login />}
      />
      <Route
        path='/courses/html/htmllessons/:id'
        element={hasUserCookie ? <HtmlLessons /> : <Login />}
      />
    </Routes>
  );
};

export default App;
