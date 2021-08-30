import { BackButton } from 'components';
import InputSearch from 'components/inputSearch';
import NavLayout from 'layout/NavLayout';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { downloadPokemon } from 'redux/pokemon';

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
  const pokemons = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentPokemon, setCurrentPokemon] = useState(null);

  const onClickPokemon = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  const onSearch = (search) => {
    console.log(search);
  };

  const onClickBack = () => {
    setCurrentPokemon(null);
  };

  useEffect(() => {
    dispatch(downloadPokemon());
  }, []);

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
          { pokemons.map((pokemon) => (
            <CardPokemon
              onClick={() => onClickPokemon(pokemon)}
              id={pokemon.id}
              image={pokemon.sprites.other['official-artwork'].front_default}
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
