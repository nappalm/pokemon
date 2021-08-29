/* eslint-disable react/no-array-index-key */
import { Card } from 'components';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const CardPokemonStyled = styled.div`
  .pokemon-image {
    height: 120px;
    width: 120px;
    margin: 20px 0;
  }
  .card-pokemon {
    height: 220px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .shiny-list {
    display: flex;
    .shiny-pokemon {
      width: 50px;
      height: 50px;
    }
  }
`;

const CardPokemon = (props) => {
  const {
    image,
    shiny,
  } = props;

  return (
    <CardPokemonStyled>
      <Card className="card-pokemon">
        <img
          className="pokemon-image"
          src={image}
          alt="pokemon-card"
        />
        <div className="shiny-list">
          {shiny.map((img, index) => (
            <img
              key={index}
              src={img}
              className="shiny-pokemon"
              alt="shiny-pokemon"
            />
          ))}
        </div>
      </Card>
    </CardPokemonStyled>
  );
};

CardPokemon.defaultProps = {
  image: '',
  shiny: [],
};

CardPokemon.propTypes = {
  image: PropTypes.string,
  shiny: PropTypes.arrayOf(PropTypes.object),
};

export default CardPokemon;
