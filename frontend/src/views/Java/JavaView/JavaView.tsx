import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './JavaView.module.css';
import { useEffect, useState } from 'react';
import { Lesson } from '@/views/Java/JavaLessons/JavaLessons';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

const JavaView = () => {
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
        const javaLessons = lessons
          .filter((lesson: Lesson) => lesson.subject === 'Java')
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setLessons(javaLessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['java-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['java-content']}>
        <span className={style['java-span']}>Dostępne lekcje:</span>
        <div className={style['java-list']}>
          {lessons.map((lesson) => (
            <Link to={`/courses/java/javalessons/${lesson.id}`} key={lesson.id}>
              <ThinTile name={`${lesson.description}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JavaView;
