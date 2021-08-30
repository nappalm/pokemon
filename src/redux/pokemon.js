/* eslint-disable no-await-in-loop */
// 🔰 Reducer
const initState = { pokemons: [] };
export default (state = initState, action) => {
  if (action.type === '@download/pokemons') {
    return {
      pokemons: action.payload,
    };
  }

  return state;
};

// 🔰 Actions
export const downloadPokemon = () => async (dispatch) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await res.json();

  const createPokemon = async (results) => {
    const pokemons = [];
    for (let pk = 0; pk < results.length; pk += 1) {
      const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${results[pk].name}`);
      const pokeData = await pokeRes.json();

      pokemons.push(pokeData);
    }

    return pokemons;
  };

  const pokemons = await createPokemon(data.results);

  dispatch({
    type: '@download/pokemons',
    payload: pokemons,
  });
};
