import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Grid from '@material-ui/core/Grid';
import { setPokemons } from '../../Action/PokemonAction';


const FilterAttack = (props) => {

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      {props.handleData2 === "" ? "" : props.handleData2 === true ? "" : props.currentPokemons.filter(pokemon => pokemon.attack >= props.handleData[0] && pokemon.attack <= props.handleData[1]).map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      ))}
      </Grid>
    </div> 
  )
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon,
  currentPokemons: state.currentPokemons

}) 

const mapDispatchToProps = { setPokemons }

export default connect(mapStateToProps, mapDispatchToProps) (FilterAttack);