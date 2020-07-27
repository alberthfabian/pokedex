import React from 'react';
import Button from '@material-ui/core/Button';
import './SliderProbabilidadLegendario.scss';
import { Link } from 'react-router-dom';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

const SliderProbabilidadLegendario = (props) => {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChangeProb = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };




  const [stateCheck, setStateCheck] = React.useState({
    checkedA: false
  });

  const handleChangeCheck = (event) => {
    setStateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
  };

  return (
    <Box display="flex">
      <div>
        <FormControlLabel className="Checkbox"
          control={
            <Checkbox 
              checked={stateCheck.checkedA} 
              onChange={handleChangeCheck} 
              name="checkedA" 
              onClick={() => props.handleChangeProb(stateCheck.checkedA) }
            />
          }
        />
      </div>
      <p style={{ color: "var(--textGeneral)" }}>Prob.<br/>Legend</p> 
        {/* <Switch
          checked={state.checkedB}
          onChange={handleChangeProb}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onClick={() => props.handleChangeProb(state.checkedB) } 
        /> */}
      
    </Box>
  );
}

export default SliderProbabilidadLegendario;