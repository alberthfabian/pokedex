import React from 'react';
import './SliderDefense.scss';
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

function valuetextDefense(value) {
  return `${value}°C`;
}

const SliderDefense = (props) => {

  const classes = useStyles();
  const [valueDefense2, setValueDefense] = React.useState([5, 230]);
  const { handleChangeDefense, valueDefense } = useServer();
  
  const handleChange = (event, newValue) => {
    setValueDefense(newValue);
  };

  const [stateCheck, setStateCheck] = React.useState({
    checkedA: false
  });

  const handleChangeCheck = (event) => {
    setStateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
  };

  return (
    <Box display="flex" className={classes.root}>
      <div>
        <FormControlLabel className="Checkbox"
          control={
            <Checkbox 
              checked={stateCheck.checkedA} 
              onChange={handleChangeCheck} 
              name="checkedA" 
              onClick={() => handleChangeDefense(stateCheck.checkedA, valueDefense2) }
            />
          }
        />
      </div>
      <div className="filter__slider">
        <Typography id="range-slider" gutterBottom style={{ color: "var(--textGeneral)" }}>
          Defense
        </Typography>
        <Slider
          value={valueDefense2}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={5}
          max={230}
          aria-labelledby="range-slider"
          getAriaValueText={valuetextDefense}
        />
        <p>{valueDefense[0] === undefined ? '' : ` ${valueDefense[0]} - ${valueDefense[1]}`}</p>
      </div>
    </Box>
  );
}

export default SliderDefense;