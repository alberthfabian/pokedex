import React, { useEffect } from "react";
// import PokeData from '../PokeData';
import { getType } from "../../img/images";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { getPokemon, setPokemons } from "../../Action/PokemonAction";
import CardModal from "../CardModal/CardModal";

const CardMain = (props) => {
  useEffect(() => {
    const getApi = async () => {
      try {
        const data = await fetch(
          "https://protected-castle-45403.herokuapp.com/pokemon/?format=json"
        );
        const resp = await data.json();
        props.getPokemon(resp);
        props.setPokemons(resp);
        // console.log(resp)
        return resp;
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  const testPokemon = {
    id: "004",
    name: "Bulbasaur",
    type1: "flying",
    type2: "poison",
    description:
      "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
    atk: "60%",
    def: "55%",
    ps: "45%",
    vel: "45%",
    generation: "G1",
  };

  if (!props.isOpen) {
    // return null
  }
  
  const cosa = () => {
    alert("asdfa");
  };

  return (
    <div className="cards__container">

      <CardModal
        isOpen={true}
        handleClick={cosa}
        id={testPokemon.id}
        name={testPokemon.name}
        type1={testPokemon.type1}
        type2={testPokemon.type2}
        description={testPokemon.description}
        atk={testPokemon.atk}
        def={testPokemon.def}
        vel={testPokemon.vel}
        number={testPokemon.id}
        generation={testPokemon.generation}
      />

      {props.currentPokemons.length === 0 && ""}
      {props.currentPokemons
        .filter((pokemon) => pokemon.name_pokemon === props.send)
        .map((filteredPokemon) => (
          <React.Fragment key={filteredPokemon.id}>
            <Card
              id={filteredPokemon.id}
              generation={filteredPokemon.generation}
              name_pokemon={filteredPokemon.name_pokemon}
              type1={filteredPokemon.type1}
              type2={filteredPokemon.type2}
              abilities={filteredPokemon.abilities
                .match(/[a-zA-Z]+\s?[a-zA-Z]+/g)
                .join(" - ")}
              experience_growt={filteredPokemon.experience_growt}
              sp_attack={filteredPokemon.sp_attack}
              sp_defense={filteredPokemon.sp_defense}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialState: state.pokemon,
  currentPokemons: state.currentPokemons,
});

const mapDispatchToProps = { getPokemon, setPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(CardMain);
