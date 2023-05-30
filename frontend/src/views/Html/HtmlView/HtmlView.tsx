import MobileLogo from '@/components/MobileLogo/MobileLogo';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { Link } from 'react-router-dom';
import style from './HtmlView.module.css';
import { useEffect, useState } from 'react';
import { Lesson } from '@/views/Html/HtmlLessons/HtmlLessons';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

const HtmlView = () => {
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
        const htmlLessons = lessons
          .filter((lesson: Lesson) => lesson.subject === 'Html')
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
        setLessons(htmlLessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['html-container']}>
      <MobileLogo />
      <NavBar />
      <div className={style['html-content']}>
        <span className={style['html-span']}>Dostępne lekcje:</span>
        <div className={style['html-list']}>
          {lessons.map((lesson) => (
            <Link to={`/courses/html/htmllessons/${lesson.id}`} key={lesson.id}>
              <ThinTile name={`${lesson.description}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HtmlView;
