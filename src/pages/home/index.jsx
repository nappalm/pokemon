import { BackButton } from 'components';
import InputSearch from 'components/inputSearch';
import NavLayout from 'layout/NavLayout';
import { useEffect, useState } from 'react';

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
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [allPokemons, setAllPokemons] = useState([]);

  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await res.json();

    function createPokemon(results) {
      results.forEach(async (pokemon) => {
        const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const pokeData = await pokeRes.json();

        setAllPokemons((currentList) => [...currentList, pokeData]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }

    createPokemon(data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const onClickPokemon = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  const onSearch = (search) => {
    console.log(search);
  };

  const onClickBack = () => {
    setCurrentPokemon(null);
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
          { allPokemons.map((pokemon) => (
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
