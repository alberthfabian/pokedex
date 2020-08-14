import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

import { setPokemons } from '../../Action/PokemonAction';


const FilterAttack = (props) => {

  // console.log(props.handleData[0])
  // console.log(props.handleData[1])

  return (
    <div className="cards__container cards__container-atack">
 
      {props.handleData2 === "" ? "" : props.handleData2 === true ? "" : props.currentPokemons.filter(pokemon => pokemon.attack >= props.handleData[0] && pokemon.attack <= props.handleData[1]).map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      ))}
    </div> 
  )
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon,
  currentPokemons: state.currentPokemons

}) 

const mapDispatchToProps = { setPokemons }

export default connect(mapStateToProps, mapDispatchToProps) (FilterAttack);