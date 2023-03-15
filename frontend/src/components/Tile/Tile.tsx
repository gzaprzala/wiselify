import style from './Tile.module.css';

const Tile = (props: { image: string | undefined; name: string }) => {
	return (
		<div className={style['tile-container']}>
			<img
				src={props.image}
				className={style['tile-container-image']}
				alt='tile'
			/>
			<span>{props.name}</span>
		</div>
	);
};

export default Tile;
