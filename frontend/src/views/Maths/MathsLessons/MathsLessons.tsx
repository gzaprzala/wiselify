import MobileLogo from '@/components/MobileLogo/MobileLogo';
import arrowleft from '@assets/img/arrow-left.svg';
import arrowright from '@assets/img/arrow-right.svg';
import NavBar from '@/components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import style from './MathsLessons.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;

export interface Lesson {
  id: number;
  subject: string;
  description: string;
  content: string;
}

const MathLessons: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(
    parseInt(id ?? '', 10) - 1
  );

  const lesson = lessons.find((lesson) => lesson.id === parseInt(id ?? '', 10));
  const navigate = useNavigate();

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      navigate(
        `/courses/maths/mathslessons/${lessons[currentLessonIndex - 1].id}`
      );
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      navigate(
        `/courses/maths/mathslessons/${lessons[currentLessonIndex + 1].id}`
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
        console.log(lessons);
        setLessons(lessons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(currentLessonIndex);

  return (
    <div className={style['mathlessons-container']}>
      <MobileLogo />
      <NavBar />
      {lessons.length > 0 && lesson && (
        <div className={style['mathlessons-content']} key={lesson.id}>
          <div className={style['mathlessons-content-upper']}>
            <img
              src={arrowleft}
              alt='left'
              className={`${style['mathlessons-arrow']} ${
                currentLessonIndex === 0
                  ? style['mathlessons-arrow-disabled']
                  : ''
              }`}
              onClick={handlePreviousLesson}
            />
            <div className={style['mathlessons-content-upper-text']}>
              <span className={style['mathlessons-span']}>
                {lessons[currentLessonIndex].subject}
              </span>
              <span className={style['mathlessons-span']}>
                Lekcja {lessons[currentLessonIndex].id}
              </span>
            </div>
            <img
              src={arrowright}
              alt='right'
              className={`${style['mathlessons-arrow']} ${
                currentLessonIndex === lessons.length - 1
                  ? style['mathlessons-arrow-disabled']
                  : ''
              }`}
              onClick={handleNextLesson}
            />
          </div>
          <div className={style['mathlessons-main']}>
            <img
              src={lessons[currentLessonIndex].content}
              className={style['mathlessons-image']}
              alt='lesson-content'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MathLessons;
