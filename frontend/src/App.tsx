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
import HistoryView from './views/History/HistoryView/HistoryView';
import HistoryLessons from './views/History/HistoryLessons/HistoryLessons';
import JavascriptView from './views/Javascript/JavascriptView/JavascriptView';
import JavascriptLessons from './views/Javascript/JavascriptLessons/JavascriptLessons';
import JavaView from './views/Java/JavaView/JavaView';
import JavaLessons from './views/Java/JavaLessons/JavaLessons';
import PythonView from './views/Python/PythonView/PythonView';
import PythonLessons from './views/Python/PythonLessons/PythonLessons';

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
        path='/courses/history'
        element={hasUserCookie ? <HistoryView /> : <Login />}
      />
      <Route
        path='/courses/history/historylessons/:id'
        element={hasUserCookie ? <HistoryLessons /> : <Login />}
      />

      <Route
        path='/courses/javascript'
        element={hasUserCookie ? <JavascriptView /> : <Login />}
      />

      <Route
        path='/courses/javascript/javascriptlessons/:id'
        element={hasUserCookie ? <JavascriptLessons /> : <Login />}
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
        path='/courses/java'
        element={hasUserCookie ? <JavaView /> : <Login />}
      />
      <Route
        path='/courses/java/javalessons/:id'
        element={hasUserCookie ? <JavaLessons /> : <Login />}
      />
      <Route
        path='/courses/python'
        element={hasUserCookie ? <PythonView /> : <Login />}
      />
      <Route
        path='/courses/python/pythonlessons/:id'
        element={hasUserCookie ? <PythonLessons /> : <Login />}
      />
    </Routes>
  );
};

export default App;
