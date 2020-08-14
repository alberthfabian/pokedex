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
  const [valueDefense, setValueDefense] = React.useState([5, 230]);
  const { handleChangeDefense } = useServer();
  
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
              onClick={() => handleChangeDefense(stateCheck.checkedA, valueDefense) }
            />
          }
        />
      </div>
      <div className="filter__slider">
        <Typography id="range-slider" gutterBottom style={{ color: "var(--textGeneral)" }}>
          Defense
        </Typography>
        <Slider
          value={valueDefense}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={5}
          max={230}
          aria-labelledby="range-slider"
          getAriaValueText={valuetextDefense}
        />
          {/* <Button href="/index/defense" size="small" color='primary' variant='contained' onClick={() => props.handleChangeDefense(valueDefense)}>
          <Link to="/index/defense" className="link">Filter</Link>
          Filter
          </Button> */}

        {/* <Switch
          checked={state.checkedB}
          onChange={handleChangeProb}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onClick={() => props.handleChangeDefense(state.checkedB, valueDefense) } 
        /> */}
        

      </div>
    </Box>
  );
}

export default SliderDefense;