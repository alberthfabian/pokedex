import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
// import images from '../img/images';
// import bug from '../img/types/bug.svg';
import CardMain from '../components/CardMain/CardMain';
import FilterAttack from '../components/FilterAttack/FilterAttack';
import { connect } from 'react-redux';
import FilterDefense from '../components/FilterDefense/FilterDefense';
import FilterProbLegend from '../components/FilterProbLegend/FilterProbLegend';
import FilterByType from '../components/FilterByType/FilterByType';
import { setPokemons } from '../Action/PokemonAction';
// import { Provider } from 'react-redux';
// import store from '../Store/store';
// import { createStore } from 'redux';
let contBug = 0;
let contDark = 0;
let contDragon = 0;
let contElectric = 0;
let contFairy = 0;
let contFight = 0;
let contFire = 0;
let contFlying = 0;
let contGhost = 0;
let contGrass = 0;
let contGround = 0;
let contIce = 0;
let contNormal = 0;
let contPoison = 0;
let contPsychic = 0;
let contRock = 0;
let contSteel = 0;
let contWater = 0;

class PokeCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      setValue: "",
      change1: "",
      valor2: "",
      valor3: "",
      valor4: "",
      valor5: "",
      iconBug: 0,
      IconBug2: 0,
      iconDark: 0,
      IconDark2: 0,
      iconDragon: 0,
      IconDragon2: 0,
      iconElectric: 0,
      IconElectric2: 0,
      iconFairy: 0,
      IconFairy2: 0,
      iconFight: 0,
      IconFight2: 0,
      iconFire: 0,
      IconFire2: 0,
      iconFlying: 0,
      IconFlying2: 0,
      iconGhost: 0,
      IconGhost2: 0,
      iconGrass: 0,
      IconGrass2: 0,
      iconGround: 0,
      IconGround2: 0,
      iconIce: 0,
      IconIce2: 0,
      iconNormal: 0,
      IconNormal2: 0,
      iconPoison: 0,
      IconPoison2: 0,
      iconPsychic: 0,
      IconPsychic2: 0,
      iconRock: 0,
      IconRock2: 0,
      iconSteel: 0,
      IconSteel2: 0,
      iconWater: 0,
      IconWater2: 0,
      valorStrong: "",
      valorDefense: "",
      valorDefense2: ""
     };
  }

  handleChange = (event, value) => {
    this.setState({
      change1: {
        valor1: value,
      }
    })
  };

  // handleChangeDefense = (e, f) => {
  //   this.props.setPokemons(this.props.initialPokeSlider)

  //   this.setState({
  //     valorDefense: e,
  //     valorDefense2: f
  //   })
  // };

  // handleData = (e, f) => {
  //   this.props.setPokemons(this.props.initialPokeSlider)
  //   this.setState({
  //     valor2: e,
  //     valor5: f
  //   })
  // };

  handleReset = (e) => {
    this.setState({
      valor3: e,
    })
  };

  // handleChangeProb = (e) => {
  //   this.props.setPokemons(this.props.initialPokeSlider)
  //   this.setState({
  //     valor4: e 
  //   });
  // };

  handleStrong = (e) => {
    this.props.setPokemons(this.props.initialPokeSlider)
    this.setState({
      valorStrong: e 
    });
  };

  

  handleIconBug = (e) => {
    this.setState({
      iconBug: (e),
      iconBug2: this.TrueAndFalse(contBug = contBug + this.state.iconBug)
    })
  };

  handleIconDark = (e) => {
    this.setState({
      iconDark: (e),
      iconDark2: this.TrueAndFalse(contDark = contDark + this.state.iconDark)
    })
  };

  handleIconDragon = (e) => {
    this.setState({
      iconDragon: (e),
      iconDragon2: this.TrueAndFalse(contDragon = contDragon + this.state.iconDragon)
    })
  };

  handleIconElectric = (e) => {
    this.setState({
      iconElectric: (e),
      iconElectric2: this.TrueAndFalse(contElectric = contElectric + this.state.iconElectric)
    })
  };

  handleIconFairy = (e) => {
    this.setState({
      iconFairy: (e),
      iconFairy2: this.TrueAndFalse(contFairy = contFairy + this.state.iconFairy)
    })
  };

  handleIconFight = (e) => {
    this.setState({
      iconFight: (e),
      iconFight2: this.TrueAndFalse(contFight = contFight + this.state.iconFight)
    })
  };

  handleIconFire = (e) => {
    this.setState({
      iconFire: (e),
      iconFire2: this.TrueAndFalse(contFire = contFire + this.state.iconFire)
    })
  };

  handleIconFlying = (e) => {
    this.setState({
      iconFlying: (e),
      iconFlying2: this.TrueAndFalse(contFlying = contFlying + this.state.iconFlying)
    })
  };

  handleIconGhost = (e) => {
    this.setState({
      iconGhost: (e),
      iconGhost2: this.TrueAndFalse(contGhost = contGhost + this.state.iconGhost)
    })
  };

  handleIconGrass = (e) => {
    this.setState({
      iconGrass: (e),
      iconGrass2: this.TrueAndFalse(contGrass = contGrass + this.state.iconGrass)
    })
  };

  handleIconGround = (e) => {
    this.setState({
      iconGround: (e),
      iconGround2: this.TrueAndFalse(contGround = contGround + this.state.iconGround)
    })
  };

  handleIconIce = (e) => {
    this.setState({
      iconIce: (e),
      iconIce2: this.TrueAndFalse(contIce = contIce + this.state.iconIce)
    })
  };

  handleIconNormal = (e) => {
    this.setState({
      iconNormal: (e),
      iconNormal2: this.TrueAndFalse(contNormal = contNormal + this.state.iconNormal)
    })
  };

  handleIconPoison = (e) => {
    this.setState({
      iconPoison: (e),
      iconPoison2: this.TrueAndFalse(contPoison = contPoison + this.state.iconPoison)
    })
  };

  handleIconPsychic = (e) => {
    this.setState({
      iconPsychic: (e),
      iconPsychic2: this.TrueAndFalse(contPsychic = contPsychic + this.state.iconPsychic)
    })
  };

  handleIconRock = (e) => {
    this.setState({
      iconRock: (e),
      iconRock2: this.TrueAndFalse(contRock = contRock + this.state.iconRock)
    })
  };

  handleIconSteel = (e) => {
    this.setState({
      iconSteel: (e),
      iconSteel2: this.TrueAndFalse(contSteel = contSteel + this.state.iconSteel)
    })
  };

  handleIconWater = (e) => {
    this.setState({
      iconWater: (e),
      iconWater2: this.TrueAndFalse(contWater = contWater + this.state.iconWater)
    })
  };

  TrueAndFalse = (number) => {
    let result = 0;
    result = number % 2;
    if (result === 0){
    return true;
    } else {
      return false;
    }
  }


  render() {
    return (
      <div className="poke-cards">
        <Navbar />
        <div className="content">
          <Menu handleIconBug={this.handleIconBug} handleIconDark={this.handleIconDark} handleIconDragon={this.handleIconDragon} handleIconElectric={this.handleIconElectric} handleIconFairy={this.handleIconFairy} handleIconFight={this.handleIconFight} handleIconFire={this.handleIconFire} handleIconFlying={this.handleIconFlying} handleIconGhost={this.handleIconGhost} handleIconGrass={this.handleIconGrass} handleIconGround={this.handleIconGround} handleIconIce={this.handleIconIce} handleIconNormal={this.handleIconNormal} handleIconPoison={this.handleIconPoison} handleIconPsychic={this.handleIconPsychic} handleIconRock={this.handleIconRock} handleIconSteel={this.handleIconSteel} handleIconWater={this.handleIconWater} valueBug={this.state.iconBug2} valueDark={this.state.iconDark2} valueDragon={this.state.iconDragon2} valueElectric={this.state.iconElectric2} valueFairy={this.state.iconFairy2} valueFight={this.state.iconFight2} valueFire={this.state.iconFire2} valueFlying={this.state.iconFlying2} valueGhost={this.state.iconGhost2} valueGrass={this.state.iconGrass2} valueGround={this.state.iconGround2} valueIce={this.state.iconIce2} valueNormal={this.state.iconNormal2} valuePoison={this.state.iconPoison2} valuePsychic={this.state.iconPsychic2} valueRock={this.state.iconRock2} valueSteel={this.state.iconSteel2} valueWater={this.state.iconWater2} onChange={this.handleChange} handleStrong={this.handleStrong} handleData={this.handleData} handleChangeDefense={this.handleChangeDefense} handleReset={this.handleReset} handleChangeProb={this.handleChangeProb}/>
          <div className="cards__container-main">

          {this.state.valor3 === 1 ? window.location.reload() : null}

            {/* {this.state.valor2.length === 0 ? 'No hay datos' : 'Si hay datos'} */}
            <CardMain send={this.state.change1.valor1} />
            <FilterAttack handleData={this.state.valor5} handleData2={this.state.valor2}/>
            <FilterDefense handleChangeDefense={this.state.valorDefense} handleChangeDefense2={this.state.valorDefense2}/>
            <FilterProbLegend  handleChangeProb={this.state.valor4}/>
            <FilterByType handleIconBug={this.state.iconBug2} handleIconDark={this.state.iconDark2} handleIconDragon={this.state.iconDragon2} handleIconElectric={this.state.iconElectric2} handleIconFairy={this.state.iconFairy2} handleIconFight={this.state.iconFight2} handleIconFire={this.state.iconFire2} handleIconFlying={this.state.iconFlying2} handleIconGhost={this.state.iconGhost2} handleIconGrass={this.state.iconGrass2} handleIconGround={this.state.iconGround2} handleIconIce={this.state.iconIce2} handleIconNormal={this.state.iconNormal2} handleIconPoison={this.state.iconPoison2} handleIconPsychic={this.state.iconPsychic2} handleIconRock={this.state.iconRock2} handleIconSteel={this.state.iconSteel2} handleIconWater={this.state.iconWater2}/>
          </div> 
        </div>

        {/* {console.log(this.state.iconBug2, "Bug")}  */}
        {/* {console.log(this.state.iconDark2, "Dark")}  */}
        {/* {console.log(this.state.iconDragon2, "Dragon")}  */}
        {/* {console.log(this.state.iconElectric2, "Electric")}  */}
        {/* {console.log(this.state.iconFairy2, "Fairy")}  */}
        {/* {console.log(this.state.iconFight2, "Fight")}  */}
        {/* {console.log(this.state.iconFire2, "Fire")}  */}
        {/* {console.log(this.state.iconFlying2, "Flying")}  */}
        {/* {console.log(this.state.iconGhost2, "Ghost")}  */}
        {/* {console.log(this.state.iconGrass2, "Grass")}  */}
        {/* {console.log(this.state.iconGround2, "Ground")}  */}
        {/* {console.log(this.state.iconIce2, "Ice")}  */}
        {/* {console.log(this.state.iconNormal2, "Normal")}  */}
        {/* {console.log(this.state.iconPoison2, "Poison")}  */}
        {/* {console.log(this.state.iconPsychic2, "Psychic")}  */}
        {/* {console.log(this.state.iconRock2, "Rock")}  */}
        {/* {console.log(this.state.iconSteel2, "Steel")}  */}
        {/* {console.log(this.state.iconWater2, "Water")}  */}
        {/* {console.log(this.state.valor5)}  */}

        {/* {console.log(this.state.change1.valor1)}  */}

        {/* <div style={{ background: "black", padding: "20px" }}>
          <img src={images.bug} />
          <img src={bug} />
        </div> */}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon
}) 

const mapDispatchToProps = { setPokemons } 

export default connect(mapStateToProps, mapDispatchToProps) (PokeCards);
