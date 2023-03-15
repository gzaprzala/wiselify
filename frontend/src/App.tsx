import { Routes, Route } from 'react-router-dom';
import Home from '@views/Home/Home';
import Courses from './views/Courses/Courses';
import Maths from './views/Maths/view/Maths';
import Lesson1 from './views/Maths/lessons/Lesson1/Lesson1';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/courses' element={<Courses />} />
			<Route path='/courses/maths' element={<Maths />} />
			<Route path='/courses/maths/lesson1' element={<Lesson1 />} />
		</Routes>
	);
};

export default App;
