import MobileLogo from '@/components/MobileLogo/MobileLogo';
import style from './Achievements.module.css';
import NavBar from '@/components/NavBar/NavBar';
import ThinTile from '@/components/ThinTile/ThinTile';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Achievements = () => {
  // const [loginCount, setLoginCount] = useState(0);

  // useEffect(() => {
  //   const fetchAchievementData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${import.meta.env.VITE_BACKEND_URL}api/v1/achievements`
  //       );
  //       setLoginCount(response.data.loginCount);
  //       console.log(loginCount);
  //     } catch (error) {
  //       console.log('Error fetching achievement data:', error);
  //     }
  //   };

  //   fetchAchievementData();
  // }, []);

  return (
    <div className={style['achievements']}>
      <MobileLogo />
      <NavBar />
      <div className={style['achievements-content']}>
        <span className={style['achievements-span']}>Lista osiągnięć:</span>
        <div className={style['achievements-list']}>
          <div className={style['achievements-inactive']}>
            <ThinTile name='Zaloguj się 5 razy' />
          </div>
          <div className={style['achievements-inactive']}>
            <ThinTile name='Zaloguj się 50 razy' />
          </div>
          <div className={style['achievements-inactive']}>
            <ThinTile name='Przejrzyj 5 lekcji' />
          </div>
          <div className={style['achievements-inactive']}>
            <ThinTile name='Przejrzyj 50 lekcji' />
          </div>
          <div className={style['achievements-inactive']}>
            <ThinTile name='Posiadaj konto minimum 5 dni' />
          </div>
          <div className={style['achievements-inactive']}>
            <ThinTile name='Posiadaj konto minimum 50 dni' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
