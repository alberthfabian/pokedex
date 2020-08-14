import React from 'react';
import PokeSeeker from '../PokeFind/PokeSeeker';
import PokeButton from '../Button/Button';
import PokeFilter from '../Filter/Filter';
import iconStrong from '../../img/icon-strongest.svg'
import iconWeakness from '../../img/icon-weakness.svg'
import iconLegendary from '../../img/icon-legendary.svg'
import iconReset from '../../img/icon-reset.svg'
import iconCollapse from '../../img/icon-collapse.svg'
import { EmptyPokemons } from '../../Action/PokemonAction';
import { connect } from 'react-redux';
// import SliderProbabilidadLegendario from '../SliderProbabilidadLegendario/SliderProbabilidadLegendario';
import { useServer } from '../Context/server';




const Menu = (props) => {

  const { handleLegendary, handleWeakness, handleStrong, handleReset, handleProLegendary } = useServer();

  
  const collapseMenu = () => {
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.toggle("collapse")
  };
  const expandMenu = () => {
    var menuToggle = document.querySelector('.menu');
    menuToggle.classList.remove("collapse")
  };

  return (


    <>
      <div className="menu collapse">
        <div className="menu__content">

          <PokeSeeker onChange={props.onChange} handleClick={expandMenu} tooltip="Search pokémon" />
          <PokeFilter handleIconBug={props.handleIconBug} handleIconDark={props.handleIconDark} handleIconDragon={props.handleIconDragon} handleIconElectric={props.handleIconElectric} handleIconFairy={props.handleIconFairy} handleIconFight={props.handleIconFight} handleIconFire={props.handleIconFire} handleIconFlying={props.handleIconFlying} handleIconGhost={props.handleIconGhost} handleIconGrass={props.handleIconGrass} handleIconGround={props.handleIconGround} handleIconIce={props.handleIconIce} handleIconNormal={props.handleIconNormal} handleIconPoison={props.handleIconPoison} handleIconPsychic={props.handleIconPsychic} handleIconRock={props.handleIconRock} handleIconSteel={props.handleIconSteel} handleIconWater={props.handleIconWater} handleData={props.handleData} handleChangeDefense={props.handleChangeDefense} handleChangeProb={props.handleChangeProb}/>

          <PokeButton
            icon={iconStrong}
            title="Strongest"
            style={{ width: "100%" }}
            tooltip="Strongest"
            link="/index/cards"
            onClick={handleStrong}
          />
          <PokeButton
            icon={iconWeakness}
            title="Weakness"
            tooltip="Weakness"
            link="/index/cards"
            style={{ width: "100%" }}
            onClick={handleWeakness}
          />
          <PokeButton
            icon={iconLegendary}
            title="Legendaries"
            tooltip="Legendaries"
            link="/index/cards"
            style={{ width: "100%" }}
            onClick={handleLegendary}
          />
          <PokeButton
            icon={iconLegendary}
            title="Pro.Legendaries"
            tooltip="Pro.Legendaries"
            link="/index/cards"
            style={{ width: "100%" }}
            onClick={handleProLegendary}
          />
          {/* <SliderProbabilidadLegendario handleChangeProb={props.handleChangeProb} /> */}

          <PokeButton
            icon={iconReset}
            title="Reset / All"
            tooltip="Reset / All"
            link="/index/cards"
            style={{ width: "100%" }}
            onClick={handleReset}
            // onClick={() => props.EmptyPokemons()}
            // onClick={() => props.onChange("")}
          />
          
        </div>

        <PokeButton
          icon={iconCollapse}
          title="Collapse"
          className="button-collapse"
          classNameContainer="button-collapse__container"
          link="/index/cards"
          onClick={collapseMenu}
        />
      </div>
    </>
  );
};


const mapDispatchToProps = { EmptyPokemons }

export default connect(null , mapDispatchToProps)(Menu);