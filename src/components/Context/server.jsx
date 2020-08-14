import React, { useState, useEffect, useMemo, useCallback} from 'react';
import { getColor } from '../../styles/gradients';

const Server = React.createContext();

let cBug = 1;
let cDark = 1;
let cDragon = 1;
let cElectric = 1;
let cFairy = 1;
let cFight = 1;
let cFire = 1;
let cFlying = 1;
let cGhost = 1;
let cGrass = 1;
let cGround = 1;
let cIce = 1;
let cNormal = 1;
let cPoison = 1;
let cPsychic = 1;
let cRock = 1;
let cSteel = 1;
let cWater = 1;
let resultBug = 0;
let resultDark = 0;
let resultDragon = 0;
let resultElectric = 0;
let resultFairy = 0;
let resultFight = 0;
let resultFire = 0;
let resultFlying = 0;
let resultGhost = 0;
let resultGrass = 0;
let resultGround = 0;
let resultIce = 0;
let resultNormal = 0;
let resultPoison = 0;
let resultPsychic = 0;
let resultRock = 0;
let resultSteel = 0;
let resultWater = 0;

export function ServerProvider(props) {
  const [ jobs, setJobs ] = useState([]);
  const [ jobsAll, setJobsAll ] = useState([]);
  var [ legendary, setLegendary ] = useState([])
  var [ weakness, setWeakness ] = useState([])
  var [ strong, setStrong ] = useState([])
  var [ search, setSearch ] = useState([])
  var [ bug, setBug ] = useState([])
  var [ dark, setDark ] = useState([])
  var [ dragon, setDragon ] = useState([])
  var [ electric, setElectric ] = useState([])
  var [ fairy, setFairy ] = useState([])
  var [ fight, setFight ] = useState([])
  var [ fire, setFire ] = useState([])
  var [ flying, setFlying ] = useState([])
  var [ ghost, setGhost ] = useState([])
  var [ grass, setGrass ] = useState([])
  var [ ground, setGround ] = useState([])
  var [ ice, setIce ] = useState([])
  var [ normal, setNormal ] = useState([])
  var [ poison, setPoison ] = useState([])
  var [ psychic, setPsychic ] = useState([])
  var [ rock, setRock ] = useState([])
  var [ steel, setSteel ] = useState([])
  var [ water, setWater ] = useState([])
  var [ attackTest, setAttackTest ] = useState([])
  var [ attack, setAttack ] = useState([])
  var [ defenseTest, setDefenseTest ] = useState([])
  var [ valueDefense, setValueDefense ] = useState([])
  var [ proLegendary, setProLegendary ] = useState([])


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // const data = await fetch('https://pokemon333.herokuapp.com/pokemon/?format')
    const data = await fetch('http://localhost:3000/pokemon')
    const jobsInfo = await data.json()
    setJobs(jobsInfo);
    setJobsAll(jobsInfo.filter(pokemon => pokemon.id < 31));
  }

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

  const changeColorBug = useCallback(() => {
    cBug = cBug + 1;
    resultBug = cBug % 2;
    if (resultBug === 0) {
        setBug(jobs.filter(nameSearch => nameSearch.type1 === 'bug'));
        document.getElementById('bug').style.background = getColor(typePokemon.bug)
        if(dark.length !== 0){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);

        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
      setBug([])
        document.getElementById('bug').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.bug, typePokemon.default, jobs, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorDark = useCallback(() => {
    cDark = cDark + 1;
    resultDark = cDark % 2;
    if (resultDark === 0) {
        setDark(jobs.filter(nameSearch => nameSearch.type1 === 'dark'));
        document.getElementById('dark').style.background = getColor(typePokemon.dark)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
        setBug([])
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setDark([])
        document.getElementById('dark').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.dark, typePokemon.default, jobs, bug.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorDragon = useCallback(() => {
    cDragon = cDragon + 1;
    resultDragon = cDragon % 2;
    if (resultDragon === 0) {
        setDragon(jobs.filter(nameSearch => nameSearch.type1 === 'dragon'));
        document.getElementById('dragon').style.background = getColor(typePokemon.dragon)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setDragon([]);
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.dragon, typePokemon.default, jobs, bug.length, dark.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length ])

  const changeColorElectric = useCallback(() => {
    cElectric = cElectric + 1;
    resultElectric = cElectric % 2;
    if (resultElectric === 0) {
        setElectric(jobs.filter(nameSearch => nameSearch.type1 === 'electric'));
        document.getElementById('electric').style.background = getColor(typePokemon.electric)
        if(bug.length !== 0){
          cBug = cBug + 1;
        } else if(dark.length !== 0){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setElectric([]);
        document.getElementById('electric').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.electric, typePokemon.default, jobs, bug.length, dark.length, dragon.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorFairy = useCallback(() => {
    cFairy = cFairy + 1;
    resultFairy = cFairy % 2;
    if (resultFairy === 0) {
        setFairy(jobs.filter(nameSearch => nameSearch.type1 === 'fairy'));
        document.getElementById('fairy').style.background = getColor(typePokemon.fairy)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setFairy([]);
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.fairy, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorFight = useCallback(() => {
    cFight = cFight + 1;
    resultFight = cFight % 2;
    if (resultFight === 0) {
        setFight(jobs.filter(nameSearch => nameSearch.type1 === 'fighting'));
        document.getElementById('fight').style.background = getColor(typePokemon.fight)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setFight([]);
        document.getElementById('fight').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.fight, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorFire = useCallback(() => {
    cFire = cFire + 1;
    resultFire = cFire % 2;
    if (resultFire === 0) {
        setFire(jobs.filter(nameSearch => nameSearch.type1 === 'fire'));
        document.getElementById('fire').style.background = getColor(typePokemon.fire)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setFire([]);
        document.getElementById('fire').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.fire, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorFlying = useCallback(() => {
    cFlying = cFlying + 1;
    resultFlying = cFlying % 2;
    if (resultFlying === 0) {
        setFlying(jobs.filter(nameSearch => nameSearch.type1 === 'flying'));
        document.getElementById('flying').style.background = getColor(typePokemon.flying)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setFlying([]);
        document.getElementById('flying').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.flying, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorGhost = useCallback(() => {
    cGhost = cGhost + 1;
    resultGhost = cGhost % 2;
    if (resultGhost === 0) {
        setGhost(jobs.filter(nameSearch => nameSearch.type1 === 'ghost'));
        document.getElementById('ghost').style.background = getColor(typePokemon.ghost)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setGhost([]);
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.ghost, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorGrass = useCallback(() => {
    cGrass = cGrass + 1;
    resultGrass = cGrass % 2;
    if (resultGrass === 0) {
        setGrass(jobs.filter(nameSearch => nameSearch.type1 === 'grass'));
        document.getElementById('grass').style.background = getColor(typePokemon.grass)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setGrass([]);
        document.getElementById('grass').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.grass, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorGround = useCallback(() => {
    cGround = cGround + 1;
    resultGround = cGround % 2;
    if (resultGround === 0) {
        setGround(jobs.filter(nameSearch => nameSearch.type1 === 'ground'));
        document.getElementById('ground').style.background = getColor(typePokemon.ground)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setGround([]);
        document.getElementById('ground').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.ground, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorIce = useCallback(() => {
    cIce = cIce + 1;
    resultIce = cIce % 2;
    if (resultIce === 0) {
        setIce(jobs.filter(nameSearch => nameSearch.type1 === 'ice'));
        document.getElementById('ice').style.background = getColor(typePokemon.ice)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setIce([]);
        document.getElementById('ice').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.ice, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, normal.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorNormal = useCallback(() => {
    cNormal = cNormal + 1;
    resultNormal = cNormal % 2;
    if (resultNormal === 0) {
        setNormal(jobs.filter(nameSearch => nameSearch.type1 === 'normal'));
        document.getElementById('normal').style.background = getColor(typePokemon.normal)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setNormal([]);
        document.getElementById('normal').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.normal, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, poison.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorPoison = useCallback(() => {
    cPoison = cPoison + 1;
    resultPoison = cPoison % 2;
    if (resultPoison === 0) {
        setPoison(jobs.filter(nameSearch => nameSearch.type1 === 'poison'));
        document.getElementById('poison').style.background = getColor(typePokemon.poison)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setPoison([]);
        document.getElementById('poison').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.poison, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, psychic.length, rock.length, steel.length, water.length])

  const changeColorPsychic = useCallback(() => {
    cPsychic = cPsychic + 1;
    resultPsychic = cPsychic % 2;  
    if (resultPsychic === 0) {
        setPsychic(jobs.filter(nameSearch => nameSearch.type1 === 'psychic'));
        document.getElementById('psychic').style.background = getColor(typePokemon.psychic)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setRock([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setPsychic([]);
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.psychic, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, rock.length, steel.length, water.length])

  const changeColorRock = useCallback(() => {
    cRock = cRock + 1;
    resultRock = cRock % 2;
    if (resultRock === 0) {
        setRock(jobs.filter(nameSearch => nameSearch.type1 === 'rock'));
        document.getElementById('rock').style.background = getColor(typePokemon.rock)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setSteel([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setRock([]);
        document.getElementById('rock').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.rock, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, steel.length, water.length])

  const changeColorSteel = useCallback(() => {
    cSteel = cSteel + 1;
    resultSteel = cSteel % 2;
    if (resultSteel === 0) {
        setSteel(jobs.filter(nameSearch => nameSearch.type1 === 'steel'));
        document.getElementById('steel').style.background = getColor(typePokemon.steel)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(water.length !== 0) {
          cWater = cWater + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setWater([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('water').style.background = getColor(typePokemon.default)
    } else {
        setSteel([]);
        document.getElementById('steel').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.steel, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, water.length])

  const changeColorWater = useCallback(() => {
    cWater = cWater + 1;
    resultWater = cWater % 2;
    if (resultWater === 0) {
        setWater(jobs.filter(nameSearch => nameSearch.type1 === 'water'));
        document.getElementById('water').style.background = getColor(typePokemon.water)
        if(bug.length !== 0 ) {
          cBug = cBug + 1;
        } else if(dark.length !== 0 ){
          cDark = cDark + 1;
        } else if(dragon.length !== 0) {
          cDragon = cDragon + 1;
        } else if(electric.length !== 0) {
          cElectric = cElectric + 1;
        } else if(fairy.length !== 0) {
          cFairy = cFairy + 1
        } else if(fight.length !== 0) {
          cFight = cFight + 1
        } else if(fire.length !== 0) {
          cFire = cFire + 1
        } else if(flying.length !== 0) {
          cFlying = cFlying + 1
        } else if(ghost.length !== 0) {
          cGhost = cGhost + 1
        } else if(grass.length !== 0) {
          cGrass = cGrass + 1
        } else if(ground.length !== 0) {
          cGround = cGround + 1
        } else if(ice.length !== 0) {
          cIce = cIce + 1
        } else if(normal.length !== 0) {
          cNormal = cNormal + 1
        } else if(poison.length !== 0) {
          cPoison = cPoison + 1
        } else if(psychic.length !== 0) {
          cPsychic = cPsychic + 1
        } else if(rock.length !== 0) {
          cRock = cRock + 1
        } else if(steel.length !== 0) {
          cSteel = cSteel + 1
        }
        setProLegendary([]);
        setJobsAll([]);
        setStrong([]);
        setSearch([]);
        setLegendary([]);
        setWeakness([]);
	      setBug([]);
        setDark([]);
        setDragon([]);
        setElectric([]);
        setFairy([]);
        setFight([]);
        setFire([]);
        setFlying([]);
        setGhost([]);
        setGrass([]);
        setGround([]);
        setIce([]);
        setNormal([]);
        setPoison([]);
        setPsychic([]);
        setRock([]);
        setSteel([]);
        document.getElementById('bug').style.background = getColor(typePokemon.default)
        document.getElementById('dark').style.background = getColor(typePokemon.default)
        document.getElementById('dragon').style.background = getColor(typePokemon.default)
        document.getElementById('electric').style.background = getColor(typePokemon.default)
        document.getElementById('fairy').style.background = getColor(typePokemon.default)
        document.getElementById('fight').style.background = getColor(typePokemon.default)
        document.getElementById('fire').style.background = getColor(typePokemon.default)
        document.getElementById('flying').style.background = getColor(typePokemon.default)
        document.getElementById('ghost').style.background = getColor(typePokemon.default)
        document.getElementById('grass').style.background = getColor(typePokemon.default)
        document.getElementById('ground').style.background = getColor(typePokemon.default)
        document.getElementById('ice').style.background = getColor(typePokemon.default)
        document.getElementById('normal').style.background = getColor(typePokemon.default)
        document.getElementById('poison').style.background = getColor(typePokemon.default)
        document.getElementById('psychic').style.background = getColor(typePokemon.default)
        document.getElementById('rock').style.background = getColor(typePokemon.default)
        document.getElementById('steel').style.background = getColor(typePokemon.default)
    } else {
        setWater([]);
        document.getElementById('water').style.background = getColor(typePokemon.default)
    }
  },[typePokemon.water, typePokemon.default, jobs, bug.length, dark.length, dragon.length, electric.length, fairy.length, fight.length, fire.length, flying.length, ghost.length, grass.length, ground.length, ice.length, normal.length, poison.length, psychic.length, rock.length, steel.length ])

  const handleChange = useCallback((event, value) => {
    setSearch(jobs.filter(nameSearch => nameSearch.name_pokemon === value));
    cBug = 1;
    cDark = 1;
    cDragon = 1;
    cElectric = 1;
    cFairy = 1;
    cFight = 1;
    cFire = 1;
    cFlying = 1;
    cGhost = 1;
    cGrass = 1;
    cGround = 1;
    cIce = 1;
    cNormal = 1;
    cPoison = 1;
    cPsychic = 1;
    cRock = 1;
    cSteel = 1;
    cWater = 1;

    document.getElementById('bug').style.background = getColor(typePokemon.default)
    document.getElementById('dark').style.background = getColor(typePokemon.default)
    document.getElementById('dragon').style.background = getColor(typePokemon.default)
    document.getElementById('electric').style.background = getColor(typePokemon.default)
    document.getElementById('fairy').style.background = getColor(typePokemon.default)
    document.getElementById('fight').style.background = getColor(typePokemon.default)
    document.getElementById('fire').style.background = getColor(typePokemon.default)
    document.getElementById('flying').style.background = getColor(typePokemon.default)
    document.getElementById('ghost').style.background = getColor(typePokemon.default)
    document.getElementById('grass').style.background = getColor(typePokemon.default)
    document.getElementById('ground').style.background = getColor(typePokemon.default)
    document.getElementById('ice').style.background = getColor(typePokemon.default)
    document.getElementById('normal').style.background = getColor(typePokemon.default)
    document.getElementById('poison').style.background = getColor(typePokemon.default)
    document.getElementById('psychic').style.background = getColor(typePokemon.default)
    document.getElementById('rock').style.background = getColor(typePokemon.default)
    document.getElementById('steel').style.background = getColor(typePokemon.default)
    document.getElementById('water').style.background = getColor(typePokemon.default)
    setProLegendary([]);
    setLegendary([]);
    setWeakness([]);
    setStrong([]);
    setBug([]);
    setDark([]);
    setDragon([]);
    setElectric([]);
    setFairy([]);
    setFight([]);
    setFire([]);
    setFlying([]);
    setGhost([]);
    setGrass([]);
    setGround([]);
    setIce([]);
    setNormal([]);
    setPoison([]);
    setPsychic([]);
    setRock([]);
    setSteel([]);
    setWater([]);
  }, [jobs, typePokemon.default])
  
  const handleLegendary = useCallback((e) => {
    setLegendary(jobs.filter(nameSearch => nameSearch.is_legendary === 1));
    cBug = 1;
    cDark = 1;
    cDragon = 1;
    cElectric = 1;
    cFairy = 1;
    cFight = 1;
    cFire = 1;
    cFlying = 1;
    cGhost = 1;
    cGrass = 1;
    cGround = 1;
    cIce = 1;
    cNormal = 1;
    cPoison = 1;
    cPsychic = 1;
    cRock = 1;
    cSteel = 1;
    cWater = 1;

    document.getElementById('bug').style.background = getColor(typePokemon.default)
    document.getElementById('dark').style.background = getColor(typePokemon.default)
    document.getElementById('dragon').style.background = getColor(typePokemon.default)
    document.getElementById('electric').style.background = getColor(typePokemon.default)
    document.getElementById('fairy').style.background = getColor(typePokemon.default)
    document.getElementById('fight').style.background = getColor(typePokemon.default)
    document.getElementById('fire').style.background = getColor(typePokemon.default)
    document.getElementById('flying').style.background = getColor(typePokemon.default)
    document.getElementById('ghost').style.background = getColor(typePokemon.default)
    document.getElementById('grass').style.background = getColor(typePokemon.default)
    document.getElementById('ground').style.background = getColor(typePokemon.default)
    document.getElementById('ice').style.background = getColor(typePokemon.default)
    document.getElementById('normal').style.background = getColor(typePokemon.default)
    document.getElementById('poison').style.background = getColor(typePokemon.default)
    document.getElementById('psychic').style.background = getColor(typePokemon.default)
    document.getElementById('rock').style.background = getColor(typePokemon.default)
    document.getElementById('steel').style.background = getColor(typePokemon.default)
    document.getElementById('water').style.background = getColor(typePokemon.default)
    setProLegendary([]);
    setSearch([]);
    setWeakness([]);
    setStrong([]);
    setBug([]);
    setDark([]);
    setDragon([]);
    setElectric([]);
    setFairy([]);
    setFight([]);
    setFire([]);
    setFlying([]);
    setGhost([]);
    setGrass([]);
    setGround([]);
    setIce([]);
    setNormal([]);
    setPoison([]);
    setPsychic([]);
    setRock([]);
    setSteel([]);
    setWater([]);
  },[jobs, typePokemon.default])

  const handleWeakness = useCallback((e) => {
    setWeakness(jobs.filter(nameSearch => nameSearch.fuerza_IV < 9));
    cBug = 1;
    cDark = 1;
    cDragon = 1;
    cElectric = 1;
    cFairy = 1;
    cFight = 1;
    cFire = 1;
    cFlying = 1;
    cGhost = 1;
    cGrass = 1;
    cGround = 1;
    cIce = 1;
    cNormal = 1;
    cPoison = 1;
    cPsychic = 1;
    cRock = 1;
    cSteel = 1;
    cWater = 1;

    document.getElementById('bug').style.background = getColor(typePokemon.default)
    document.getElementById('dark').style.background = getColor(typePokemon.default)
    document.getElementById('dragon').style.background = getColor(typePokemon.default)
    document.getElementById('electric').style.background = getColor(typePokemon.default)
    document.getElementById('fairy').style.background = getColor(typePokemon.default)
    document.getElementById('fight').style.background = getColor(typePokemon.default)
    document.getElementById('fire').style.background = getColor(typePokemon.default)
    document.getElementById('flying').style.background = getColor(typePokemon.default)
    document.getElementById('ghost').style.background = getColor(typePokemon.default)
    document.getElementById('grass').style.background = getColor(typePokemon.default)
    document.getElementById('ground').style.background = getColor(typePokemon.default)
    document.getElementById('ice').style.background = getColor(typePokemon.default)
    document.getElementById('normal').style.background = getColor(typePokemon.default)
    document.getElementById('poison').style.background = getColor(typePokemon.default)
    document.getElementById('psychic').style.background = getColor(typePokemon.default)
    document.getElementById('rock').style.background = getColor(typePokemon.default)
    document.getElementById('steel').style.background = getColor(typePokemon.default)
    document.getElementById('water').style.background = getColor(typePokemon.default)
    setProLegendary([]);
    setSearch([]);
    setLegendary([]);
    setStrong([]);
    setBug([]);
    setDark([]);
    setDragon([]);
    setElectric([]);
    setFairy([]);
    setFight([]);
    setFire([]);
    setFlying([]);
    setGhost([]);
    setGrass([]);
    setGround([]);
    setIce([]);
    setNormal([]);
    setPoison([]);
    setPsychic([]);
    setRock([]);
    setSteel([]);
    setWater([]);
  },[jobs, typePokemon.default])

  const handleStrong = useCallback((e) => {
    setStrong(jobs.filter(nameSearch => nameSearch.fuerza_IV > 37));
    cBug = 1;
    cDark = 1;
    cDragon = 1;
    cElectric = 1;
    cFairy = 1;
    cFight = 1;
    cFire = 1;
    cFlying = 1;
    cGhost = 1;
    cGrass = 1;
    cGround = 1;
    cIce = 1;
    cNormal = 1;
    cPoison = 1;
    cPsychic = 1;
    cRock = 1;
    cSteel = 1;
    cWater = 1;

    document.getElementById('bug').style.background = getColor(typePokemon.default)
    document.getElementById('dark').style.background = getColor(typePokemon.default)
    document.getElementById('dragon').style.background = getColor(typePokemon.default)
    document.getElementById('electric').style.background = getColor(typePokemon.default)
    document.getElementById('fairy').style.background = getColor(typePokemon.default)
    document.getElementById('fight').style.background = getColor(typePokemon.default)
    document.getElementById('fire').style.background = getColor(typePokemon.default)
    document.getElementById('flying').style.background = getColor(typePokemon.default)
    document.getElementById('ghost').style.background = getColor(typePokemon.default)
    document.getElementById('grass').style.background = getColor(typePokemon.default)
    document.getElementById('ground').style.background = getColor(typePokemon.default)
    document.getElementById('ice').style.background = getColor(typePokemon.default)
    document.getElementById('normal').style.background = getColor(typePokemon.default)
    document.getElementById('poison').style.background = getColor(typePokemon.default)
    document.getElementById('psychic').style.background = getColor(typePokemon.default)
    document.getElementById('rock').style.background = getColor(typePokemon.default)
    document.getElementById('steel').style.background = getColor(typePokemon.default)
    document.getElementById('water').style.background = getColor(typePokemon.default)
    setProLegendary([]);
    setSearch([]);
    setLegendary([]);
    setWeakness([]);
    setBug([]);
    setDark([]);
    setDragon([]);
    setElectric([]);
    setFairy([]);
    setFight([]);
    setFire([]);
    setFlying([]);
    setGhost([]);
    setGrass([]);
    setGround([]);
    setIce([]);
    setNormal([]);
    setPoison([]);
    setPsychic([]);
    setRock([]);
    setSteel([]);
    setWater([]);
  },[jobs, typePokemon.default])

  const handleProLegendary = useCallback((e) => {
    setProLegendary(jobs.filter(nameSearch => nameSearch.predict_is_legendary_2 === 1));
    cBug = 1;
    cDark = 1;
    cDragon = 1;
    cElectric = 1;
    cFairy = 1;
    cFight = 1;
    cFire = 1;
    cFlying = 1;
    cGhost = 1;
    cGrass = 1;
    cGround = 1;
    cIce = 1;
    cNormal = 1;
    cPoison = 1;
    cPsychic = 1;
    cRock = 1;
    cSteel = 1;
    cWater = 1;

    document.getElementById('bug').style.background = getColor(typePokemon.default)
    document.getElementById('dark').style.background = getColor(typePokemon.default)
    document.getElementById('dragon').style.background = getColor(typePokemon.default)
    document.getElementById('electric').style.background = getColor(typePokemon.default)
    document.getElementById('fairy').style.background = getColor(typePokemon.default)
    document.getElementById('fight').style.background = getColor(typePokemon.default)
    document.getElementById('fire').style.background = getColor(typePokemon.default)
    document.getElementById('flying').style.background = getColor(typePokemon.default)
    document.getElementById('ghost').style.background = getColor(typePokemon.default)
    document.getElementById('grass').style.background = getColor(typePokemon.default)
    document.getElementById('ground').style.background = getColor(typePokemon.default)
    document.getElementById('ice').style.background = getColor(typePokemon.default)
    document.getElementById('normal').style.background = getColor(typePokemon.default)
    document.getElementById('poison').style.background = getColor(typePokemon.default)
    document.getElementById('psychic').style.background = getColor(typePokemon.default)
    document.getElementById('rock').style.background = getColor(typePokemon.default)
    document.getElementById('steel').style.background = getColor(typePokemon.default)
    document.getElementById('water').style.background = getColor(typePokemon.default)
    setSearch([]);
    setWeakness([]);
    setStrong([]);
    setBug([]);
    setDark([]);
    setDragon([]);
    setElectric([]);
    setFairy([]);
    setFight([]);
    setFire([]);
    setFlying([]);
    setGhost([]);
    setGrass([]);
    setGround([]);
    setIce([]);
    setNormal([]);
    setPoison([]);
    setPsychic([]);
    setRock([]);
    setSteel([]);
    setWater([]);
  },[jobs, typePokemon.default])

  const handleReset = useCallback((e) => {
    setJobsAll(jobs.filter(pokemon => pokemon.id < 31));
    cBug = 1;
    cDark = 1;
    cDragon = 1;
    cElectric = 1;
    cFairy = 1;
    cFight = 1;
    cFire = 1;
    cFlying = 1;
    cGhost = 1;
    cGrass = 1;
    cGround = 1;
    cIce = 1;
    cNormal = 1;
    cPoison = 1;
    cPsychic = 1;
    cRock = 1;
    cSteel = 1;
    cWater = 1;

    document.getElementById('bug').style.background = getColor(typePokemon.default)
    document.getElementById('dark').style.background = getColor(typePokemon.default)
    document.getElementById('dragon').style.background = getColor(typePokemon.default)
    document.getElementById('electric').style.background = getColor(typePokemon.default)
    document.getElementById('fairy').style.background = getColor(typePokemon.default)
    document.getElementById('fight').style.background = getColor(typePokemon.default)
    document.getElementById('fire').style.background = getColor(typePokemon.default)
    document.getElementById('flying').style.background = getColor(typePokemon.default)
    document.getElementById('ghost').style.background = getColor(typePokemon.default)
    document.getElementById('grass').style.background = getColor(typePokemon.default)
    document.getElementById('ground').style.background = getColor(typePokemon.default)
    document.getElementById('ice').style.background = getColor(typePokemon.default)
    document.getElementById('normal').style.background = getColor(typePokemon.default)
    document.getElementById('poison').style.background = getColor(typePokemon.default)
    document.getElementById('psychic').style.background = getColor(typePokemon.default)
    document.getElementById('rock').style.background = getColor(typePokemon.default)
    document.getElementById('steel').style.background = getColor(typePokemon.default)
    document.getElementById('water').style.background = getColor(typePokemon.default)
    setProLegendary([]);
    setStrong([]);
    setSearch([]);
    setLegendary([]);
    setWeakness([]);
    setBug([]);
    setDark([]);
    setDragon([]);
    setElectric([]);
    setFairy([]);
    setFight([]);
    setFire([]);
    setFlying([]);
    setGhost([]);
    setGrass([]);
    setGround([]);
    setIce([]);
    setNormal([]);
    setPoison([]);
    setPsychic([]);
    setRock([]);
    setSteel([]);
    setWater([]);
  },[jobs, typePokemon.default])

  const handleData = useCallback((e, f) => {
    setAttackTest(e);
    setAttack(f);
  },[])

  const handleChangeDefense = useCallback((e, f) => {
    setDefenseTest(e);
    setValueDefense(f);
  },[])

  // const handleChangeProb = useCallback((e) => {
    // this.props.setPokemons(this.props.initialPokeSlider)
    // this.setState({
      // setLegendaryPro(e); 
      // console.log(e, 'e')
    // });
  // },[])

  const value = useMemo(() => {
    return ({
      proLegendary, defenseTest, valueDefense, attackTest, attack, bug, dark, dragon, electric, fairy, fight, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water, jobs, jobsAll, search, legendary, weakness, strong, handleChange, handleWeakness, handleStrong, handleLegendary, handleReset, changeColorBug, changeColorDark, changeColorDragon, changeColorElectric, changeColorFairy, changeColorFight, changeColorFire, changeColorFlying, changeColorGhost, changeColorGrass, changeColorGround, changeColorIce, changeColorNormal, changeColorPoison, changeColorPsychic, changeColorRock, changeColorSteel, changeColorWater, handleData, handleChangeDefense, handleProLegendary
    })
  }, [proLegendary, defenseTest, valueDefense, attackTest, attack, bug, dark, dragon, electric, fairy, fight, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water, jobs, jobsAll, search, legendary, weakness, strong, handleChange, handleWeakness, handleStrong, handleLegendary, handleReset, changeColorBug, changeColorDark, changeColorDragon, changeColorElectric, changeColorFairy, changeColorFight, changeColorFire, changeColorFlying, changeColorGhost, changeColorGrass, changeColorGround, changeColorIce, changeColorNormal, changeColorPoison, changeColorPsychic, changeColorRock, changeColorSteel, changeColorWater, handleData, handleChangeDefense, handleProLegendary])

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}