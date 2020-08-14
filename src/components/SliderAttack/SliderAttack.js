import React from 'react';
import './SliderAttack.scss';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { useServer } from '../Context/server';


const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const SliderAttack = (props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState([5, 185]);
  var { handleData } = useServer();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [stateCheck, setStateCheck] = React.useState({
    checkedA: false
  });

  const handleChangeCheck = (event) => {
    setStateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
  };

  return (
    <Box display="flex" className={classes.root}>
      <div className="filter__checks-group" >
        <FormControlLabel className="Checkbox"
          control={
            <Checkbox 
              checked={stateCheck.checkedA} 
              onChange={handleChangeCheck} 
              name="checkedA" 
              onClick={() => handleData(stateCheck.checkedA, value) }
            />
          }
        />
      </div>
      <div className="filter__slider">
        <Typography id="range-slider" gutterBottom style={{ color: "var(--textGeneral)" }}>
          Attack 
        </Typography>
        <Slider
          value={value}
          onChange={ handleChange } 
          valueLabelDisplay="auto"
          min={5}
          max={185}
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

      </div>
       
    </Box>
  );
}

export default SliderAttack;