import { Routes, Route } from 'react-router-dom';
import Home from '@views/Home/Home';
import Courses from './views/Courses/Courses';
import Maths from './views/Maths/view/Maths';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/courses' element={<Courses />} />
			<Route path='/courses/maths' element={<Maths />} />
		</Routes>
	);
};

export default App;
