import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './JavascriptView.module.css';
import { useEffect, useState } from 'react';
import { Lesson } from '@/views/Javascript/JavascriptLessons/JavascriptLessons';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

const JavascriptView = () => {
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
        const javascriptLessons = lessons
          .filter((lesson: Lesson) => lesson.subject === 'Javascript')
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setLessons(javascriptLessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['javascript-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['javascript-content']}>
        <span className={style['javascript-span']}>Dostępne lekcje:</span>
        <div className={style['javascript-list']}>
          {lessons.map((lesson) => (
            <Link
              to={`/courses/javascript/javascriptlessons/${lesson.id}`}
              key={lesson.id}>
              <ThinTile name={`${lesson.description}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavascriptView;
