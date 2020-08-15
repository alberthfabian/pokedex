const color = {
    bug: "var(--colorBug)",
    dark: "var(--colorDark)",
    dragon: "var(--colorDragon)",
    electric: "var(--colorElectric)",
    fairy: "var(--colorFairy)",
    fight: "var(--colorFight)",
    fire: "var(--colorFire)",
    flying: "var(--colorFlying)",
    ghost: "var(--colorGhost)",
    grass: "var(--colorGrass)",
    ground: "var(--colorGround)",
    ice: "var(--colorIce)",
    normal: "var(--colorNormal)",
    poison: "var(--colorPoison)",
    psychic: "var(--colorPsychic)",
    rock: "var(--colorRock)",
    steel: "var(--colorSteel)",
    water: "var(--colorWater)",
    default: "var(--textGeneral)",
}

export const getColor = (type) => {
    let typePokemon = color[type];
    if (typePokemon === undefined) {
        typePokemon = color.default
    }
    return typePokemon;
}

export default color;