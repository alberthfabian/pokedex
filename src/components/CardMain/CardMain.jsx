import React from 'react';
import Card from '../Card/Card';
import { useServer } from '../Context/server';


const CardMain = (props) => {

  var { search, legendary, weakness, strong, jobsAll, proLegendary } = useServer();

  return (

    <div className="cards__container"> 
        
        {search.length === 0 && legendary.length === 0 && weakness.length === 0 && strong.length === 0 && proLegendary.length === 0 ? jobsAll.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
          </React.Fragment>
        )) : ''}

        

        {search.map(filter => (
          <React.Fragment key={filter.id}> 
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
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
  )
}

export default CardMain;
