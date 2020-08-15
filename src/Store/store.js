import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initialState = {
  pokemon: [], 
  currentPokemons: []
}

const reducerPokemon = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMON":
      return {
        ...state, pokemon: [...action.payload]
      }
      // break;

      case "EMPTY_POKEMONS":
      return {
        ...state, currentPokemons: []
      }
      // break;

      case "SET_POKEMONS":
      // state.currentPokemons = [] 
      return {
        ...state, currentPokemons: [...action.payload]
      }
      // break;

    default:

    
      break;
  }

  return state
}

export default createStore(reducerPokemon, initialState, applyMiddleware(ReduxThunk))















// const store = createStore(reducerPokemon, initialState)


// export default createStore(reducerPokemon)



// const initialState = {
//   pokemon: []
// }

// function reducer(state, action) {
  
//   switch(action.type) {
//     case 'SET_POKEMON_LIST': {
//       return {...state, pokemon: action.payload}
//     }
//     default: {
//       return state
//     }
//   }
// }

// const store = createStore(reducer, initialState)


  // switch(action.type) {
  //   case 'SET_POKEMON_LIST': {
  //     return {...state, pokemon: action.payload}
  //   }
  //   default: {