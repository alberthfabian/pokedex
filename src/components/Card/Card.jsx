import React from 'react';
import { useServer } from '../Context/server';
import images from '../../img/images';

const Card = (props) => {

  const { id, generation, name_pokemon, type1, type2, abilities, experience_growt, attack, defense } = props;

  var { onOpen } = useServer();

  const onOpen2 = () => {
    var valor = document.getElementById(id).value;
    onOpen(valor);
  }

  const attackValue = () => {
    return ((attack*100)/185)
  }

  const defenseValue = () => {
    return ((defense*100)/230)
  }
  
  return (
    <button id={id} className='text' value={id} onClick={onOpen2} >
    <div className="card">
      
      {type1 === "bug" ? 
        <div className="card__image-container" style={{ background: "var(--gradientBug)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorBug)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorBug)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorBug)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >

              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorBug", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorBug", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "dark" ?

        <div className="card__image-container" style={{ background: "var(--gradientDark)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorDark)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorDark)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorDark)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >

              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorDark", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorDark", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "dragon" ? 

        <div className="card__image-container" style={{ background: "var(--gradientDragon)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorDragon)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorDragon)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorDragon)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorDragon", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorDragon", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "electric" ? 
        
        <div className="card__image-container" style={{ background: "var(--gradientElectric)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorElectric)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorElectric)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorElectric)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorElectric", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorElectric", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "fairy" ? 

        <div className="card__image-container" style={{ background: "var(--gradientFairy)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorFairy)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorFairy)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorFairy)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFairy)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFairy)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "fighting" ?

        <div className="card__image-container" style={{ background: "var(--gradientFight)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorFight)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorFight)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorFight)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFight)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFight)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "fire" ?

        <div className="card__image-container" style={{ background: "var(--gradientFire)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorFire)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorFire)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorFire)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFire)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFire", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "flying" ?

        <div className="card__image-container" style={{ background: "var(--gradientFlying)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorFlying)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorFlying)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorFlying)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFlying)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorFlying)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "ghost" ?

        <div className="card__image-container" style={{ background: "var(--gradientGhost)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorGhost)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorGhost)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorGhost)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGhost)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGhost)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "grass" ?

        <div className="card__image-container" style={{ background: "var(--gradientGrass)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorGrass)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorGrass)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorGrass)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGrass)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGrass", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "ground" ?

        <div className="card__image-container" style={{ background: "var(--gradientGround)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorGround)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorGround)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorGround)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGround)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGround)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "ice" ?

        <div className="card__image-container" style={{ background: "var(--gradientIce)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorIce)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorIce)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorIce)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.type} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorIce)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorIce)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "normal" ?

        <div className="card__image-container" style={{ background: "var(--gradientNormal)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorNormal)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorNormal)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorNormal)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorNormal)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorNormal)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "poison" ?

        <div className="card__image-container" style={{ background: "var(--gradientPoison)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorPoison)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorPoison)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorPoison)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorPoison)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorPoison)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "psychic" ?

        <div className="card__image-container" style={{ background: "var(--gradientPsychic)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorPsychic)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorPsychic)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorPsychic)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorPsychic)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorPsychic)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "rock" ?

        <div className="card__image-container" style={{ background: "var(--gradientRock)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorRock)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorRock)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorRock)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorRock)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorRock)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : type1 === "steel" ?

        <div className="card__image-container" style={{ background: "var(--gradientSteel)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorSteel)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorSteel)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorSteel)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorSteel)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorSteel)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div> : 
        
        <div className="card__image-container" style={{ background: "var(--gradientWater)" }}>
          <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorWater)" }}>{`#${id}`}</div>
          <div className="card__gen" style={{ color: "var(--colorWater)" }}>G{generation}</div>
        </div>
          <div className="poke-image">
            <div className="image__size">
              {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
            </div>
            <h2 style={{ color: "var(--colorWater)" }} >{name_pokemon}</h2>
            <div className="card__type">
            <div className="card__type1" >
              <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
              <span>{type1}</span>
            </div>
            <div className="card__type2" >
              
              {type2 ? type2 === "bug" ? <div className="card__type-icon" style={{ background: "var(--gradientBug)" }}>
                <img src={images.bug} alt="type" />
              </div> : type2 === "dark" ? <div className="card__type-icon" style={{ background: "var(--gradientDark)" }}>
                <img src={images.dark} alt="type" />
              </div> : type2 === "dragon" ? <div className="card__type-icon" style={{ background: "var(--gradientDragon)" }}>
                <img src={images.dragon} alt="type" />
              </div> : type2 === "electric" ? <div className="card__type-icon" style={{ background: "var(--gradientElectric)" }}>
                <img src={images.electric} alt="type" />
              </div> : type2 === "fairy" ? <div className="card__type-icon" style={{ background: "var(--gradientFairy)" }}>
                <img src={images.fairy} alt="type" />
              </div> : type2 === "fighting" ? <div className="card__type-icon" style={{ background: "var(--gradientFight)" }}>
                <img src={images.fight} alt="type" />
              </div> : type2 === "fire" ? <div className="card__type-icon" style={{ background: "var(--gradientFire)" }}>
                <img src={images.fire} alt="type" />
              </div> : type2 === "flying" ? <div className="card__type-icon" style={{ background: "var(--gradientFlying)" }}>
                <img src={images.flying} alt="type" />
              </div> : type2 === "ghost" ? <div className="card__type-icon" style={{ background: "var(--gradientGhost)" }}>
                <img src={images.ghost} alt="type" />
              </div> : type2 === "grass" ? <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                <img src={images.grass} alt="type" />
              </div> : type2 === "ground" ? <div className="card__type-icon" style={{ background: "var(--gradientGround)" }}>
                <img src={images.ground} alt="type" />
              </div> : type2 === "ice" ? <div className="card__type-icon" style={{ background: "var(--gradientIce)" }}>
                <img src={images.ice} alt="type" />
              </div> : type2 === "normal" ? <div className="card__type-icon" style={{ background: "var(--gradientNormal)" }}>
                <img src={images.normal} alt="type" />
              </div> : type2 === "poison" ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                <img src={images.poison} alt="type" />
              </div> : type2 === "psychic" ? <div className="card__type-icon" style={{ background: "var(--gradientPsychic)" }}>
                <img src={images.psychic} alt="type" />
              </div> : type2 === "rock" ? <div className="card__type-icon" style={{ background: "var(--gradientRock)" }}>
                <img src={images.rock} alt="type" />
              </div> : type2 === "steel" ? <div className="card__type-icon" style={{ background: "var(--gradientSteel)" }}>
                <img src={images.steel} alt="type" />
              </div> : <div className="card__type-icon" style={{ background: "var(--gradientWater)" }}>
                <img src={images.water} alt="type" />
              </div>
            : "" }

              <span>{type2}</span>
            </div>
            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">{abilities}</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">{experience_growt}</span>
            </div>
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorWater)", width: attackValue() }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorWater)", width: defenseValue() }}></div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
    </button>
  )
}

export default Card;