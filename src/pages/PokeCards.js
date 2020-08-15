import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import CardMain from '../components/CardMain/CardMain';
import FilterAttack from '../components/FilterAttack/FilterAttack';
import FilterDefense from '../components/FilterDefense/FilterDefense';
import FilterProbLegend from '../components/FilterProbLegend/FilterProbLegend';
import FilterByType from '../components/FilterByType/FilterByType';
import { useServer } from '../components/Context/server';
import CardModal from '../components/CardModal/CardModal';

const PokeCards = () => {

  const { open, modalOpen } = useServer();

  return (
    <div className="poke-cards">
      <Navbar />
      {open === true ? modalOpen.map(filter => (
        <React.Fragment key={filter.id}> 
          <CardModal id={filter.id < 10 ? `00${filter.id}` : filter.id > 9 && filter.id < 100 ? `0${filter.id}` : filter.id } name={filter.name_pokemon} type1={filter.type1} type2={filter.type2} description={filter.descripcion_1} atk={filter.attack} def={filter.defense} ps={filter.hp} vel={filter.speed} number={filter.id} /> 
        </React.Fragment>
      )) : ''}
      <div className="content">
        <Menu/>
        <div className="cards__container-main">
          <CardMain/>
          <FilterAttack/>
          <FilterDefense/>
          <FilterProbLegend />
          <FilterByType/>
        </div> 
      </div>
    </div>
  )
}

export default PokeCards;
