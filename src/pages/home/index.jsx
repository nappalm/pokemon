/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { BackButton } from 'components';
import InputSearch from 'components/inputSearch';
import NavLayout from 'layout/NavLayout';
import { useEffect, useState } from 'react';

// 🔰 Redux hooks
import { useDispatch, useSelector } from 'react-redux';
import { downloadPokemon, getPokemons } from 'redux/pokemon';

// 🔰 Page components
import CardPokemon from './components/CardPokemon';
import PokemonDetail from './components/pokemonDetail';

// 🔰 Page style
import {
  PokemonGridStyled,
  SearchRowStyled,
  PokemonDetailStyled,
} from './style';

const Home = () => {
  // 🔰 Redux hooks
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  // 🔰 Page states
  // eslint-disable-next-line no-unused-vars
  const [elementSearch, setElementSearch] = useState(null);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  // 🔰 Download pokemon from api or get localStorage
  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(downloadPokemon(() => {
        // ✅ This function return the error code
        // ✅ Validate errors in this scope
        alert('Se ha presentado un problema');
      }));
    }
  }, []);

  const onClickPokemon = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  const onSearch = (search) => {
    if (search === '') setCurrentPokemon(null);

    const searchOutput = pokemons
      .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()));

    setElementSearch(searchOutput);
  };

  const onClickBack = () => {
    setCurrentPokemon(null);
  };

  const getPokemonList = () => {
    if (elementSearch) return elementSearch;
    return pokemons;
  };

  return (
    <NavLayout>
      <>
        <SearchRowStyled showBackButton={currentPokemon !== null}>
          <div className="__back">
            <BackButton onClick={onClickBack} />
          </div>
          <div className="__input">
            <InputSearch onSearch={onSearch} />
          </div>
        </SearchRowStyled>

        <PokemonGridStyled hidden={currentPokemon !== null}>
          { getPokemonList().map((pokemon) => (
            <CardPokemon
              onClick={() => onClickPokemon(pokemon)}
              id={pokemon.id}
              image={pokemon.sprites?.other['official-artwork'].front_default}
              name={pokemon.name}
              type={pokemon.types}
              key={pokemon.id}
            />
          ))}
        </PokemonGridStyled>

        <PokemonDetailStyled hidden={currentPokemon === null}>
          <PokemonDetail>
            <PokemonDetail.CardPokemon
              image={currentPokemon?.sprites.other['official-artwork'].front_default}
              shiny={[
                currentPokemon?.sprites.front_default,
                currentPokemon?.sprites.back_default,
              ]}
            />
            <PokemonDetail.CardPokemonDetail
              name={currentPokemon?.name}
              type={currentPokemon?.types}
              weight={currentPokemon?.weight}
              height={currentPokemon?.height}
              pokedex={currentPokemon?.id}
              shiny={[
                currentPokemon?.sprites.front_shiny,
                currentPokemon?.sprites.back_shiny,
              ]}
            />
          </PokemonDetail>
        </PokemonDetailStyled>

      </>
    </NavLayout>
  );
};

export default Home;
