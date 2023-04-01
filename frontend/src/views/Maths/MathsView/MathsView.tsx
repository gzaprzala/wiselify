import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './MathsView.module.css';
import { useEffect, useState } from 'react';
import { Lesson } from '@/views/Maths/MathsLessons/MathsLessons';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

const Maths = () => {
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
        console.log(lessons);
        setLessons(lessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className={style['maths-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['maths-content']}>
        <span className={style['maths-span']}>Dostępne lekcje:</span>
        <div className={style['maths-list']}>
          {lessons.map((lesson) => (
            <Link
              to={`/courses/maths/mathslessons/${lesson.id}`}
              key={lesson.id}>
              <ThinTile name={`${lesson.id}. ${lesson.description}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maths;
