import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import Grid from '@material-ui/core/Grid';

class FilterStrong extends React.Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        {this.props.initialPokeSlider.filter(pokemon => pokemon.fuerza_IV > 37).map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment> 
        ))}



        {/* {this.props.handleData2 === "" ? "" : this.props.handleData2 === true ? "" : this.props.initialPokeSlider.filter(pokemon => pokemon.attack >= this.props.handleData[0] && pokemon.attack <= this.props.handleData[1]).map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment> 
        ))} */}

         
        </Grid>
      </div> 
    )
  }
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps) (FilterStrong);