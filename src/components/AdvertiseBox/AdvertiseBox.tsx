import "./AdvertiseBox.css";
import { useState } from 'react';

const AdvertiseBox = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <div className="box-advertise-container">
        <div className="box-advertise">
          <div className="space"></div>
          <span>
            <p>carro 1</p>
            <button>R$ 450.000,00</button>
          </span>
        </div>
        <div className="box-advertise">
          <div className="space"></div>
          <span>
            <p>carro 2</p>
            <button>R$ 550.000,00</button>
          </span>
        </div>
        <div className="box-advertise">
          <div className="space"></div>
          <span>
            <p>carro 3</p>
            <button>R$ 350.000,00</button>
          </span>
        </div>
        <div className="box-advertise">
          <div className="space"></div>
          <span>
            <p>carro 4</p>
            <button>R$ 250.000,00</button>
          </span>
        </div>
      </div>
      {!showMore && (
        <div className="button-container">
          <button className="show-more-btn" onClick={handleShowMore}>
            Veja todos os automóveis
          </button>
        </div>
      )}
      {showMore && (
        <div className="box-advertise-container">
          <div className="box-advertise">
            <div className="space"></div>
            <span>
              <p>carro 5</p>
              <button>R$ 450.000,00</button>
            </span>
          </div>
          <div className="box-advertise">
            <div className="space"></div>
            <span>
              <p>carro 6</p>
              <button>R$ 550.000,00</button>
            </span>
          </div>
          <div className="box-advertise">
            <div className="space"></div>
            <span>
              <p>carro 7</p>
              <button>R$ 350.000,00</button>
            </span>
          </div>
          <div className="box-advertise">
            <div className="space"></div>
            <span>
              <p>carro 8</p>
              <button>R$ 250.000,00</button>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertiseBox;
