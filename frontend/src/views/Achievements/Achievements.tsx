import MobileLogo from '@/components/MobileLogo/MobileLogo';
import style from './Achievements.module.css';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { useEffect, useState } from 'react';
import AuthService from '@/services/auth.service';

const fetchAchievements = `${
  import.meta.env.VITE_BACKEND_URL
}api/v1/achievements`;

const Achievements = () => {
  const [achievements, setAchievements] = useState(Object);
  const userId = AuthService.getCurrentUser().id;
  const fetchLink = `${fetchAchievements}/${userId}`;

  useEffect(() => {
    fetch(fetchLink, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((responseAchievements) => {
        if (responseAchievements.ok) {
          return responseAchievements.json();
        } else {
          throw new Error('Failed to fetch achievements');
        }
      })
      .then((achievements) => {
        setAchievements(achievements);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={style['achievements']}>
      <MobileLogo />
      <NavBar />
      <div className={style['achievements-content']}>
        <span className={style['achievements-span']}>Lista osiągnięć:</span>
        <div className={style['achievements-list']}>
          <div
            className={
              achievements.loginCount >= 5
                ? style['achievements-active']
                : style['achievements-inactive']
            }>
            <ThinTile name='Zaloguj się 5 razy' />
          </div>
          <div
            className={
              achievements.loginCount >= 50
                ? style['achievements-active']
                : style['achievements-inactive']
            }>
            <ThinTile name='Zaloguj się 50 razy' />
          </div>
          <div
            className={
              achievements.loginCount >= 100
                ? style['achievements-active']
                : style['achievements-inactive']
            }>
            <ThinTile name='Zaloguj się 100 razy' />
          </div>
          <div
            className={
              achievements.loginCount >= 200
                ? style['achievements-active']
                : style['achievements-inactive']
            }>
            <ThinTile name='Zaloguj się 200 razy' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
