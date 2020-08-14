import React  from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Tooltip from '@material-ui/core/Tooltip';
import iconFind from '../../img/icon-search.svg';
import { useServer } from '../Context/server';

const MyTooltip = ({title, children}) =>{
  if (title === undefined) {
      return children;
  }
  return (
  <Tooltip title={title}>
      {children}
  </Tooltip>
  )
}

const PokeSeeker = (props) => {

  const { jobs, handleChange } = useServer();
  const { handleClick, tooltip } = props;

  return (
    <div className="pokefinder">

      <MyTooltip title={tooltip}  >
        <button onClick={handleClick}> <img src={iconFind} alt="IconFind"/></button>
      </MyTooltip>
      {/* {jobs.length === 0 ? "" : ( */}
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          disableClearable
          onChange={handleChange}
          options={jobs.map((option) => option.name_pokemon)}
          renderInput={(params) => (
            <TextField {...params} label="" margin="normal" placeholder="Search pokémon" />
          )}
        />
      {/* )} */}
    </ div>
  )
}

export default PokeSeeker;