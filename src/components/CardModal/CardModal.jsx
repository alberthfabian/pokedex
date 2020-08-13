import React from 'react';
import { getType } from '../../img/images';
import { getGradient } from '../../styles/gradients';
import { getColor } from '../../styles/colors';

const CardModal = (props) => {
    
const { id, name, type1, type2, description, atk, def, ps, vel, number } = props;

    return (
        <main className="modal">

            <div className="modal-card">

                <div className="modal-card__facts-container" style={{ background: getGradient(type1) }}>

                    <div className="modal-card__number-gen-cont">
                        <div className="modal-card__number-gen">
                            <div className="modal-card__number" style={{ color: getColor(type1) }}>#{number}</div>
                            <div className="modal-card__gen" style={{ color: getColor(type1) }}>G1</div>
                        </div>

                        <button onClick={props.handleClick} className="modal-card__button-close-container"><div className="modal-card__button-close" style={{ color:getColor(type1) }}> X </div></button>
                    </div>

                    <div className="modal-card__name-type">

                        <div className="image__size">
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt={name} />
                        </div>

                        <div className="modal-card__title-types">
                            <h2 style={{ color: getColor(type1)}} >  {name}</h2>
                            <div className="modal-card__type">
                                <div className="modal-card__type-icon" style={{ background:getColor(type1) }}>
                                    <span>{type1}</span>
                                    <img src={getType(type1)} alt="type" />
                                </div>
                                <div className="modal-card__type-icon" style={{ background:getColor(type2) }}>
                                    <span>{type2}</span>
                                    <img src={getType(type2)} alt="type" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-card__description">
                            <span >{description}</span>
                        </div>
                    </div>

                    <div className="modal-card__abilities">
                        <span className="label">Abilities:</span>
                        <span className="abilitie">Overgrow</span>
                        <span className="abilitie">Chlorophyll</span>
                    </div>
                    <div className="modal-card__experience">
                        <span className="label">Experience:</span>
                        <span className="experience">1059860</span>
                    </div>

                    <div className="modal-card__bars">

                        <div className="modal-card__progress">
                            <span className="label">Atk</span>
                            <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                                <div className="progress" style={{ backgroundColor: getColor(type1), width: `${atk}` }}></div>
                            </div>
                        </div>
                        <div className="modal-card__progress">
                            <span className="label">Def</span>
                            <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                                <div className="progress" style={{ backgroundColor: getColor(type1), width: `${def}` }}></div>
                            </div>
                        </div>
                        <div className="modal-card__progress">
                            <span className="label">PS</span>
                            <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                                <div className="progress" style={{ backgroundColor: getColor(type1), width: `${ps}` }}></div>
                            </div>
                        </div>
                        <div className="modal-card__progress">
                            <span className="label">Vel</span>
                            <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                                <div className="progress" style={{ backgroundColor: getColor(type1), width: `${vel}` }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main>

    )
}

export default CardModal;