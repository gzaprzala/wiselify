import MobileLogo from '@/components/MobileLogo/MobileLogo';
import arrowleft from '@assets/img/arrow-left.svg';
import arrowright from '@assets/img/arrow-right.svg';
import NavBar from '@/components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import style from './PythonLessons.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import AuthService from '@/services/auth.service';

const fetchLessons = `${import.meta.env.VITE_BACKEND_URL}api/v1/lessons`;
const saveResults = `${import.meta.env.VITE_BACKEND_URL}api/v1/results/python`;
const getResults = `${import.meta.env.VITE_BACKEND_URL}api/v1/results`;

export interface Lesson {
  id: number;
  subject: string;
  description: string;
  content: string;
}

const PythonLessons = () => {
  const { id } = useParams<{ id: string }>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [results, setResults] = useState(Object);
  const [summaryPoints, setSummaryPoints] = useState(0);
  const userId = AuthService.getCurrentUser().id;
  const saveLink = `${saveResults}/${userId}`;
  const getLink = `${getResults}/${userId}`;

  const lesson = lessons.find((lesson) => lesson.id === parseInt(id ?? '', 10));
  const navigate = useNavigate();

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      navigate(
        `/courses/python/pythonlessons/${lessons[currentLessonIndex - 1].id}`
      );
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      navigate(
        `/courses/python/pythonlessons/${lessons[currentLessonIndex + 1].id}`
      );
    }
  };

  const handleAnswerSelection = (
    questionNumber: number,
    selectedAnswer: string
  ) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionNumber - 1] = selectedAnswer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const resultData = {
      userId: userId,
      pythonTestResult: summaryPoints,
    };

    fetch(saveLink, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resultData),
    })
      .then((response) => {
        if (response.ok) {
          console.log(resultData);
          return response.json();
        } else {
          throw new Error('Failed to save result');
        }
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('Failed to save result:', error);
      });
  };

  const calculateSummaryPoints = () => {
    let points = 0;
    points += selectedAnswers[0] === 'answer1a' ? 1 : 0;
    points += selectedAnswers[1] === 'answer2c' ? 1 : 0;
    points += selectedAnswers[2] === 'answer3a' ? 1 : 0;
    points += selectedAnswers[3] === 'answer4c' ? 1 : 0;
    points += selectedAnswers[4] === 'answer5a' ? 1 : 0;
    setSummaryPoints(points);
  };

  useEffect(() => {
    fetch(getLink, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((responseResults) => {
        if (responseResults.ok) {
          return responseResults.json();
        } else {
          throw new Error('Failed to fetch results');
        }
      })
      .then((results) => {
        setResults(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
        setCurrentLessonIndex(parseInt(id ?? '', 10) - pythonLessons[0].id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    calculateSummaryPoints();
  }, [selectedAnswers]);

  return (
    <div className={style['pythonlessons-container']}>
      <MobileLogo />
      <NavBar />
      {lessons.length > 0 &&
        lesson &&
        lessons[currentLessonIndex].subject === 'Python' && (
          <div className={style['pythonlessons-content']} key={lesson.id}>
            <div className={style['pythonlessons-content-upper']}>
              <img
                src={arrowleft}
                alt='left'
                className={`${style['pythonlessons-arrow']} ${
                  currentLessonIndex === 0
                    ? style['pythonlessons-arrow-disabled']
                    : ''
                }`}
                onClick={handlePreviousLesson}
              />
              <div className={style['pythonlessons-content-upper-text']}>
                <span className={style['pythonlessons-span']}>
                  {lessons[currentLessonIndex].subject}
                </span>
                {lessons[currentLessonIndex].id !==
                  lessons[lessons.length - 1].id && (
                  <span className={style['pythonlessons-span']}>
                    Lekcja {lessons[currentLessonIndex].id - 4 * lessons.length}
                  </span>
                )}
                {lessons[currentLessonIndex].id ===
                  lessons[lessons.length - 1].id && (
                  <span className={style['pythonlessons-span']}>
                    Test wiedzy
                  </span>
                )}
              </div>

              <img
                src={arrowright}
                alt='right'
                className={`${style['pythonlessons-arrow']} ${
                  currentLessonIndex === lessons.length - 1
                    ? style['pythonlessons-arrow-disabled']
                    : ''
                }`}
                onClick={handleNextLesson}
              />
            </div>
            <div className={style['pythonlessons-main']}>
              <img
                src={lessons[currentLessonIndex].content}
                className={style['pythonlessons-image']}
                alt='lesson-content'
              />
              {lessons[currentLessonIndex].id ===
                lessons[lessons.length - 1].id && (
                <div className={style['pythonlessons-test']}>
                  <div className={style['pythonlessons-answers']}>
                    <div className={style['pythonlessons-answer']}>
                      <p className={style['pythonlessons-number']}>1.</p>
                      <input
                        type='radio'
                        name='answer1'
                        value='answer1a'
                        checked={selectedAnswers[0] === 'answer1c'}
                        onChange={() => handleAnswerSelection(1, 'answer1a')}
                      />
                      <span>a</span>
                      <input
                        type='radio'
                        name='answer1'
                        value='answer1b'
                        checked={selectedAnswers[0] === 'answer1b'}
                        onChange={() => handleAnswerSelection(1, 'answer1b')}
                      />
                      <span>b</span>
                      <input
                        type='radio'
                        name='answer1'
                        value='answer1c'
                        checked={selectedAnswers[0] === 'answer1c'}
                        onChange={() => handleAnswerSelection(1, 'answer1c')}
                      />
                      <span>c</span>
                    </div>
                    <div className={style['pythonlessons-answer']}>
                      <p className={style['pythonlessons-number']}>2.</p>
                      <input
                        type='radio'
                        name='answer2'
                        value='answer2a'
                        checked={selectedAnswers[1] === 'answer2a'}
                        onChange={() => handleAnswerSelection(2, 'answer2a')}
                      />
                      <span>a</span>
                      <input
                        type='radio'
                        name='answer2'
                        value='answer2b'
                        checked={selectedAnswers[1] === 'answer2b'}
                        onChange={() => handleAnswerSelection(2, 'answer2b')}
                      />
                      <span>b</span>
                      <input
                        type='radio'
                        name='answer2'
                        value='answer2c'
                        checked={selectedAnswers[1] === 'answer2c'}
                        onChange={() => handleAnswerSelection(2, 'answer2c')}
                      />
                      <span>c</span>
                    </div>
                    <div className={style['pythonlessons-answer']}>
                      <p className={style['pythonlessons-number']}>3.</p>
                      <input
                        type='radio'
                        name='answer3'
                        value='answer3a'
                        checked={selectedAnswers[2] === 'answer3a'}
                        onChange={() => handleAnswerSelection(3, 'answer3a')}
                      />
                      <span>a</span>
                      <input
                        type='radio'
                        name='answer3'
                        value='answer3b'
                        checked={selectedAnswers[2] === 'answer3b'}
                        onChange={() => handleAnswerSelection(3, 'answer3b')}
                      />
                      <span>b</span>
                      <input
                        type='radio'
                        name='answer3'
                        value='answer3c'
                        checked={selectedAnswers[2] === 'answer3c'}
                        onChange={() => handleAnswerSelection(3, 'answer3c')}
                      />
                      <span>c</span>
                    </div>
                    <div className={style['pythonlessons-answer']}>
                      <p className={style['pythonlessons-number']}>4.</p>
                      <input
                        type='radio'
                        name='answer4'
                        value='answer4a'
                        checked={selectedAnswers[3] === 'answer4a'}
                        onChange={() => handleAnswerSelection(4, 'answer4a')}
                      />
                      <span>a</span>
                      <input
                        type='radio'
                        name='answer4'
                        value='answer4b'
                        checked={selectedAnswers[3] === 'answer4b'}
                        onChange={() => handleAnswerSelection(4, 'answer4b')}
                      />
                      <span>b</span>
                      <input
                        type='radio'
                        name='answer4'
                        value='answer4c'
                        checked={selectedAnswers[3] === 'answer4c'}
                        onChange={() => handleAnswerSelection(4, 'answer4c')}
                      />
                      <span>c</span>
                    </div>
                    <div className={style['pythonlessons-answer']}>
                      <p className={style['pythonlessons-number']}>5.</p>
                      <input
                        type='radio'
                        name='answer5'
                        value='answer5a'
                        checked={selectedAnswers[4] === 'answer5a'}
                        onChange={() => handleAnswerSelection(5, 'answer5a')}
                      />
                      <span>a</span>
                      <input
                        type='radio'
                        name='answer5'
                        value='answer5b'
                        checked={selectedAnswers[4] === 'answer5b'}
                        onChange={() => handleAnswerSelection(5, 'answer5b')}
                      />
                      <span>b</span>
                      <input
                        type='radio'
                        name='answer5'
                        value='answer5c'
                        checked={selectedAnswers[4] === 'answer5c'}
                        onChange={() => handleAnswerSelection(5, 'answer5c')}
                      />
                      <span>c</span>
                    </div>
                    <button
                      className={style['pythonlessons-submit']}
                      onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                  <div className={style['pythonlessons-score']}>
                    {results && (
                      <span>
                        Twój ostatni wynik: {results.pythonTestResult}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default PythonLessons;
