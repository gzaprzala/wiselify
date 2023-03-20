import style from './ThinTile.module.css';

const ThinTile = (props: { name: String }) => {
  return (
    <div className={style['tile']}>
      <span className={style['tile-text']}>{props.name}</span>
    </div>
  );
};

export default ThinTile;
