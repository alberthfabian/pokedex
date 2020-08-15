import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const MyTooltip = ({ title, children }) => {
  if (title === undefined) {
    return children;
  }

  return (
    <Tooltip title={title}>
      {children}
    </Tooltip>
  )
}

export default class Pokecheck extends Component {

  render() {

    const { id, handleClick, colorType, icon, idImg, tooltipCheck } = this.props;

    return (

      <MyTooltip title={tooltipCheck}>
        <div className="checkbox-type">
          <input type="checkbox" id={id} className="checkbox-type__input" onClick={handleClick} />
          <div id={idImg} className="checkbox-type__cont" style={{ background: ` ${colorType}` }}> </div>
          <img src={icon} alt="type" />
        </div>
      </MyTooltip>
    );
  }
}




