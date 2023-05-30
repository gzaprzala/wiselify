import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './PythonView.module.css';
import { useEffect, useState } from 'react';
import { Lesson } from '@/views/Python/PythonLessons/PythonLessons';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

const PythonView = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    fetch(fetchLessons, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((responseLessons) => {
        if (responseLessons.ok) {
          return responseLessons.json();
        } else {
          throw new Error('Failed to fetch lessons');
        }
      })
      .then((lessons) => {
        const pythonLessons = lessons
          .filter((lesson: Lesson) => lesson.subject === 'Python')
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setLessons(pythonLessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['python-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['python-content']}>
        <span className={style['python-span']}>Dostępne lekcje:</span>
        <div className={style['python-list']}>
          {lessons.map((lesson) => (
            <Link
              to={`/courses/python/pythonlessons/${lesson.id}`}
              key={lesson.id}>
              <ThinTile name={`${lesson.description}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PythonView;
