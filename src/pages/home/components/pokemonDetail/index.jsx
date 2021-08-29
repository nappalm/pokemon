import styled from 'styled-components';
import PropTypes from 'prop-types';

import { device } from 'utils/screenSize';
import CardPokemon from './CardPokemon';
import CardPokemonDetail from './CardPokemonDetail';

const PokemonDetailStyled = styled.div.attrs({
  className: 'pokemon-detail',
})`
  display: grid;
  gap: 20px;
  @media ${device.mobileS} {
    grid-template-columns: repeat(100%);
  }
  @media ${device.tablet} {
    grid-template-columns: 235px calc(100% - 235px);
  }
`;
const PokemonDetail = ({ children }) => (
  <PokemonDetailStyled>
    {children}
  </PokemonDetailStyled>
);

PokemonDetail.defaultProps = {
  children: null,
};

PokemonDetail.propTypes = {
  children: PropTypes.node,
};

PokemonDetail.CardPokemon = CardPokemon;
PokemonDetail.CardPokemonDetail = CardPokemonDetail;

export default PokemonDetail;
