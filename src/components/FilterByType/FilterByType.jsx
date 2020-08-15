import React from 'react';
import Card from '../Card/Card';
import { useServer } from '../Context/server';
import './FilterByType.scss';


const FilterByType = () => {

  const { bug, dark, dragon, electric, fairy, fight, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water, attackTest, attack, valueDefense, defenseTest } = useServer();

  return (
    <div className="cards__container">

      {(bug.length !== 0 || dark.length !== 0 || dragon.length !== 0 || electric.length !== 0 || fairy.length !== 0 || fight.length !== 0 || fire.length !== 0 || flying.length !== 0 || ghost.length !== 0 || grass.length !== 0 || ground.length !== 0 || ice.length !== 0 || normal.length !== 0 || poison.length !== 0 || psychic.length !== 0 || rock.length !== 0 || steel.length !== 0 || water.length !== 0) && (defenseTest.length === 0 || attackTest.length === 0) ? <h1 id='filter'>Por favor deslice los filtros y marque la casilla para iniciar la busqueda</h1> : ''}

      {attackTest === false && defenseTest === false ? bug.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
          <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : '' }
      {attackTest === false && defenseTest === false ? dark.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? dragon.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? electric.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )): ''}
      {attackTest === false && defenseTest === false ? fairy.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? fight.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? fire.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? flying.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )): ''}
      {attackTest === false && defenseTest === false ? ghost.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? grass.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? ground.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? ice.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? normal.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? poison.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? psychic.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? rock.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? steel.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
      {attackTest === false && defenseTest === false ? water.filter(find => find.attack > attack[0] && find.defense > valueDefense[0] && find.attack < attack[1] && find.defense < valueDefense[1]).map(filter => (
        <React.Fragment key={filter.id}>
            <Card id={filter.id} generation={filter.generation} name_pokemon={filter.name_pokemon} type1={filter.type1} type2={filter.type2} abilities={filter.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filter.experience_growt} attack={filter.attack} defense={filter.defense}/>
        </React.Fragment> 
      )) : ''}
    </div> 
  )
}

export default FilterByType;