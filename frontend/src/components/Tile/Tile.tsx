import './Tile.css';

const Tile = (props: { image: string | undefined; name: string }) => {
  return (
    <div className='tile-container'>
      <img src={props.image} className='tile-container-image' alt='tile' />
      <span>{props.name}</span>
    </div>
  );
};

export default Tile;
