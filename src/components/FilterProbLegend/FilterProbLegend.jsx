import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { useServer } from '../Context/server';


const FilterProbLegend = () => {

  const { proLegendary } = useServer();

  return (
    <div className="cards__container">

      {/* {console.log(proLegendary, "proLegendary")} */}
      {proLegendary.map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
          <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      ))
      
      } 
    </div> 
  )
}

export default FilterProbLegend;