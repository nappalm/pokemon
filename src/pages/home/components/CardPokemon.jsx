import { Card, Typography } from 'components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

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
    cursor: pointer;
  }
  .pokemon-name {
    font-weight: bold;
    text-transform: capitalize;
  }
  .pokemon-tags {
    display: flex;
    gap: 5px;
    .item-type {
      border-radius: var(--border-radius);
      padding: 3px 8px;
      font-size: 11px;
      text-transform: capitalize;
    }
  }
`;
const CardPokemon = (props) => {
  const {
    id,
    name,
    type,
    image,
    onClick,
    ...restProps
  } = props;

  const padLeadingZeros = useCallback((num) => {
    const v = `00${num}`;
    return v.substr(v.length - 3);
  }, []);

  return (
    <CardPokemonStyled {...restProps}>
      <Card
        onClick={onClick}
        className="card-pokemon"
      >
        <Typography.Text className="pokemon-name">
          {name}
        </Typography.Text>
        <Typography.Text>
          {padLeadingZeros(id)}
        </Typography.Text>
        <img
          className="pokemon-image"
          src={image}
          alt="pokemon-card"
        />
        <div className="pokemon-tags">
          {type.map((pokeType) => (
            <div className={`item-type type-${pokeType.type.name}`}>
              {pokeType.type.name}
            </div>
          ))}
        </div>

      </Card>
    </CardPokemonStyled>
  );
};

CardPokemon.defaultProps = {
  id: '',
  name: '',
  type: [],
  image: '',
  onClick: () => {},
};

CardPokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  onClick: PropTypes.func,
};

export default CardPokemon;
