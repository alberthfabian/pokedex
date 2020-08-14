import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterImg from '../../img/icon-filter.svg';
import CheckBoxType from '../CheckBoxType/CheckBoxType'
import images from '../../img/images';
import SliderAttack from '../SliderAttack/SliderAttack';
import SliderDefense from '../SliderDefense/SliderDefense';
import SliderProbabilidadLegendario from '../SliderProbabilidadLegendario/SliderProbabilidadLegendario';
import { Tooltip } from '@material-ui/core';
import { useServer } from '../Context/server';


const PokeFilter = (props) => {

    const { changeColorBug, changeColorDark, changeColorDragon, changeColorElectric, changeColorFairy, changeColorFight, changeColorFire, changeColorFlying, changeColorGhost, changeColorGrass, changeColorGround, changeColorIce, changeColorNormal, changeColorPoison, changeColorPsychic, changeColorRock, changeColorSteel, changeColorWater } = useServer();
    const [expanded, setExpanded] = React.useState(false);
    
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const expandMenu = () => {
        var menuToggle = document.querySelector('.menu');
        menuToggle.classList.remove("collapse")
    };

    const typePokemon = {
        default: 'default',
        bug: 'bug',
        dark: 'dark',
        dragon: 'dragon',
        electric: 'electric',
        fairy: 'fairy',
        fight: 'fight',
        fire: 'fire',
        flying: 'flying',
        ghost: 'ghost',
        grass: 'grass',
        ground: 'ground',
        ice: 'ice',
        normal: 'normal',
        poison: 'poison',
        psychic: 'psychic',
        rock: 'rock',
        steel: 'steel',
        water: 'water'
    }

    return (
        <div className="pokefilter">
            <button onClick={expandMenu}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Tooltip title="Filtro">
                            <img src={FilterImg} alt="filter" />
                        </Tooltip>
                        <Typography className="acordion__title">Filter</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="pokefilter__content">
                            <span className="pokefilter__title-types">By type</span>

                            <div className="pokefilter__checks-continer">

                                {/* <CheckBoxType tooltipCheck={typePokemon.bug} handleClick={() => props.handleIconBug(1)} icon={getType(typePokemon.type)}/> */}
                                <CheckBoxType idImg={"bug"} tooltipCheck={typePokemon.bug} handleClick={changeColorBug} icon={images.bug} />
                                <CheckBoxType idImg={"dark"} tooltipCheck={typePokemon.dark} handleClick={changeColorDark} icon={images.dark} />
                                <CheckBoxType idImg={"dragon"} tooltipCheck={typePokemon.dragon} handleClick={changeColorDragon} icon={images.dragon} />
                                <CheckBoxType idImg={"electric"} tooltipCheck={typePokemon.electric} handleClick={changeColorElectric} icon={images.electric} />
                                <CheckBoxType idImg={"fairy"} tooltipCheck={typePokemon.fairy} handleClick={changeColorFairy} icon={images.fairy} />
                                <CheckBoxType idImg={"fight"} tooltipCheck={typePokemon.fight} handleClick={changeColorFight} icon={images.fight} />
                                <CheckBoxType idImg={"fire"} tooltipCheck={typePokemon.fire} handleClick={changeColorFire} icon={images.fire} />
                                <CheckBoxType idImg={"flying"} tooltipCheck={typePokemon.flying} handleClick={changeColorFlying} icon={images.flying} />
                                <CheckBoxType idImg={"ghost"} tooltipCheck={typePokemon.ghost} handleClick={changeColorGhost} icon={images.ghost} />
                                <CheckBoxType idImg={"grass"} tooltipCheck={typePokemon.grass} handleClick={changeColorGrass} icon={images.grass} />
                                <CheckBoxType idImg={"ground"} tooltipCheck={typePokemon.ground} handleClick={changeColorGround} icon={images.ground} />
                                <CheckBoxType idImg={"ice"} tooltipCheck={typePokemon.ice} handleClick={changeColorIce} icon={images.ice} />
                                <CheckBoxType idImg={"normal"} tooltipCheck={typePokemon.normal} handleClick={changeColorNormal} icon={images.normal} />
                                <CheckBoxType idImg={"poison"} tooltipCheck={typePokemon.poison} handleClick={changeColorPoison} icon={images.poison} />
                                <CheckBoxType idImg={"psychic"} tooltipCheck={typePokemon.psychic} handleClick={changeColorPsychic} icon={images.psychic} />
                                <CheckBoxType idImg={"rock"} tooltipCheck={typePokemon.rock} handleClick={changeColorRock} icon={images.rock} />
                                <CheckBoxType idImg={"steel"} tooltipCheck={typePokemon.steel} handleClick={changeColorSteel} icon={images.steel} />
                                <CheckBoxType idImg={"water"} tooltipCheck={typePokemon.water} handleClick={changeColorWater} icon={images.water} />


                            </div>
                            <SliderAttack handleData={props.handleData} />
                            <SliderDefense handleChangeDefense={props.handleChangeDefense} />
                            {/* <SliderProbabilidadLegendario handleChangeProb={props.handleChangeProb} /> */}
                        </div>

                    </AccordionDetails>

                </Accordion>

            </button>

        </div>
    );

}


export default PokeFilter;