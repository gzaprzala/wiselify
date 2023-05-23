import MobileLogo from '@/components/MobileLogo/MobileLogo';
import arrowleft from '@assets/img/arrow-left.svg';
import arrowright from '@assets/img/arrow-right.svg';
import NavBar from '@/components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import style from './HtmlLessons.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

export interface Lesson {
  id: number;
  subject: string;
  description: string;
  content: string;
}

const HtmlLessons = () => {
  const { id } = useParams<{ id: string }>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const lesson = lessons.find((lesson) => lesson.id === parseInt(id ?? '', 10));
  const navigate = useNavigate();

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      navigate(
        `/courses/html/htmllessons/${lessons[currentLessonIndex - 1].id}`
      );
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      navigate(
        `/courses/html/htmllessons/${lessons[currentLessonIndex + 1].id}`
      );
    }
  };

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
        const htmlLessons = lessons.filter(
          (lesson: Lesson) => lesson.subject === 'Html'
        );
        setLessons(htmlLessons);
        setCurrentLessonIndex(parseInt(id ?? '', 10) - htmlLessons[0].id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['htmllessons-container']}>
      <MobileLogo />
      <NavBar />
      {lessons.length > 0 &&
        lesson &&
        lessons[currentLessonIndex].subject === 'Html' && (
          <div className={style['htmllessons-content']} key={lesson.id}>
            <div className={style['htmllessons-content-upper']}>
              <img
                src={arrowleft}
                alt='left'
                className={`${style['htmllessons-arrow']} ${
                  currentLessonIndex === 0
                    ? style['htmllessons-arrow-disabled']
                    : ''
                }`}
                onClick={handlePreviousLesson}
              />
              <div className={style['htmllessons-content-upper-text']}>
                <span className={style['htmllessons-span']}>
                  {lessons[currentLessonIndex].subject}
                </span>
                {lessons[currentLessonIndex].id !==
                  lessons[lessons.length - 1].id && (
                  <span className={style['htmllessons-span']}>
                    Lekcja {lessons[currentLessonIndex].id - 18}
                  </span>
                )}
                {lessons[currentLessonIndex].id ===
                  lessons[lessons.length - 1].id && (
                  <span className={style['htmllessons-span']}>Test wiedzy</span>
                )}
              </div>

              <img
                src={arrowright}
                alt='right'
                className={`${style['htmllessons-arrow']} ${
                  currentLessonIndex === lessons.length - 1
                    ? style['htmllessons-arrow-disabled']
                    : ''
                }`}
                onClick={handleNextLesson}
              />
            </div>
            <div className={style['htmllessons-main']}>
              <img
                src={lessons[currentLessonIndex].content}
                className={style['htmllessons-image']}
                alt='lesson-content'
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default HtmlLessons;
