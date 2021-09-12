import { useState } from 'react';

const CardItem = ({ item }) => {
  const [track, setTrack] = useState(item.track);
  return (
    <div className="item" key={item.key}>
      <img src={item.image} alt={item.title} className="item-img" />
      <div className="item-content">
        <div className="item-content-title">{item.title}</div>
        <div className="item-content-subtitle">
          {item.subtitle.length > 30
            ? `${item.subtitle.slice(0, 30)}...`
            : item.subtitle}
        </div>
        <div className="item-content-bottom-wrap">
          <div className="item-content-follow">
            {item.follow + (track && 1)}人在追蹤
          </div>
          <button
            className={`item-content-btn ${track ? 'btn-follow' : ''}`}
            onClick={() => setTrack(!track)}
          >
            {track ? '追蹤中' : '追蹤'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
