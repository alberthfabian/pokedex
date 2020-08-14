import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

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

const PokeButton = (props) => {

    const { icon, title, link, className, classNameContainer, style, tooltip, onClick} = props;

    return (
        <Link to={link} className={`${classNameContainer} button-tooltip`}>

            <button style={style} className={`poke-button ${className}`} onClick={onClick}>
                <MyTooltip title={tooltip}  >
                    <img src={icon} alt={icon} />
                </MyTooltip>
                <p>{title}</p>
            </button>
        </Link>
    );
}

export default PokeButton;




