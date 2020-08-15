import React from 'react';
import '../css/homeImagen.scss'
import Lookema from '../img/lookemall.svg';
import Binoculares from '../img/icon-binoculars.svg';
import PokeButton from '../components/Button/Button';

class Home extends React.Component {

  render() {
    return (
      <div className="Lookema">
        <div className="center">
          <div className="Lookema__content">
            <img src={Lookema} alt="Lookema" />
          </div>
          <div className="Lookema__button">
            <PokeButton
              icon={Binoculares}
              title="I gotta look'em all"
              link="/index/cards"
              className="button-active"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;