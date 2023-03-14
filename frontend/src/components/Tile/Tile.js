import './Tile.css';

const Tile = (props) => {
  return (
    <div className='tile-container'>
      <img src={props.image} className='tile-container-image' alt='tile' />
      <span>{props.name}</span>
    </div>
  );
};

export default Tile;
