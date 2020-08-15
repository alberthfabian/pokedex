import React from 'react';
import Card from '../Card/Card';
import { useServer } from '../Context/server';

const FilterProbLegend = () => {

  const { proLegendary } = useServer();

  return (
    <div className="cards__container">
      {proLegendary.map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
          <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} attack={filteredPokemon.attack} defense={filteredPokemon.defense}/>
        </React.Fragment> 
      ))} 
    </div> 
  )
}

export default FilterProbLegend;