const gradient = {
    bug: "var(--gradientBug)",
    dark: "var(--gradientDark)",
    dragon: "var(--gradientDragon)",
    electric: "var(--gradientElectric)",
    fairy: "var(--gradientFairy)",
    fight: "var(--gradientFight)",
    fire: "var(--gradientFire)",
    flying: "var(--gradientFlying)",
    ghost: "var(--gradientGhost)",
    grass: "var(--gradientGrass)",
    ground: "var(--gradientGround)",
    ice: "var(--gradientIce)",
    normal: "var(--gradientNormal)",
    poison: "var(--gradientPoison)",
    psychic: "var(--gradientPsychic)",
    rock: "var(--gradientRock)",
    steel: "var(--gradientSteel)",
    water: "var(--gradientWater)",
    default: "var(--textGeneral)",
}

export const getGradient = (type) => {
    let typePokemon = gradient[type];
    if (typePokemon === undefined) {
        typePokemon = gradient.default
    }
    return typePokemon;
}

export default gradient;