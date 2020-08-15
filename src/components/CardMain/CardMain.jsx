import React from 'react';
import Card from '../Card/Card';
import { useServer } from '../Context/server';

// import { getType } from "../../img/images";
// import { getPokemon, setPokemons } from "../../Action/PokemonAction";

const CardMain = (props) => {

  var { search, legendary, weakness, strong, jobsAll, proLegendary, goAhead, back, bug, dark, dragon, electric, fairy, fight, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water, attackTest, defenseTest } = useServer();

  return (
    <div>
      <div className="cards__container"> 

        {search.length === 0 && legendary.length === 0 && weakness.length === 0 && strong.length === 0 && proLegendary.length === 0 ? jobsAll.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
          </React.Fragment>
        )) : ''}

        {search.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense} description={filter.descripcion_1}/>
          </React.Fragment>
        ))}

        {legendary.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
          </React.Fragment>
        ))}

        {weakness.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
          </React.Fragment>
        ))}

        {strong.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
          </React.Fragment>
        ))}
        </div>
        <div>
        {search.length === 0 && legendary.length === 0 && weakness.length === 0 && strong.length === 0 && proLegendary.length === 0 && bug.length === 0 && dark.length === 0 && dragon.length === 0 && electric.length === 0 && fairy.length === 0 && fight.length === 0 && fire.length === 0 && flying.length === 0 && ghost.length === 0 && grass.length === 0 && ground.length === 0 && ice.length === 0 && normal.length === 0 && poison.length === 0 && psychic.length === 0 && rock.length === 0 && steel.length === 0 && water.length === 0 ? 
        <div>
        <button onClick={back}>
          Atras
        </button>
        <button onClick={goAhead}>
          Adelante
        </button>
        </div>
        : ''}
        </div>

    </div>
  );
};

export default CardMain;
