import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './HistoryView.module.css';
import { useEffect, useState } from 'react';
import { Lesson } from '@/views/History/HistoryLessons/HistoryLessons';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

const HistoryView = () => {
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
        const historyLessons = lessons
          .filter((lesson: Lesson) => lesson.subject === 'Historia')
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setLessons(historyLessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['history-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['history-content']}>
        <span className={style['history-span']}>Dostępne lekcje:</span>
        <div className={style['history-list']}>
          {lessons.map((lesson) => (
            <Link
              to={`/courses/history/historylessons/${lesson.id}`}
              key={lesson.id}>
              <ThinTile name={`${lesson.description}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryView;
