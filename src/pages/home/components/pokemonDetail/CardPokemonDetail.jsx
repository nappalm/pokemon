/* eslint-disable react/no-array-index-key */
import { Card, Typography } from 'components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardPokemonDetailStyled = styled.div`
  .pk-name {
    text-transform: capitalize;
  }
  .pokemon-properties {
    margin-top: 40px;
    .pk-prop {
      padding: 10px 0;
      border-bottom: 1px solid gainsboro;
      &:last-child {
        border-bottom: none;
      }
    }
    .pk-name {
      font-size: 15px;
      font-weight: bold;
      padding-bottom: 2px;
    }
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
  .shiny-list {
    display: flex;
    margin-left: -10px;
    .shiny-pokemon {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
const CardPokemonDetail = ({
  name, pokedex, height, weight, type, shiny,
}) => (
  <CardPokemonDetailStyled>
    <Card className="pokemon-card-detail">
      <Typography.HeadLine className="pk-name">
        {name}
      </Typography.HeadLine>
      <div className="pokemon-tags">
        {type.map((pokeType) => (
          <div className={`item-type type-${pokeType.type.name}`}>
            {pokeType.type.name}
          </div>
        ))}
      </div>
      <div className="pokemon-properties">
        <div className="pk-prop">
          <Typography.Text className="pk-name">
            Pokedex Number
          </Typography.Text>
          <Typography.Text>
            {pokedex}
          </Typography.Text>
        </div>
        <div className="pk-prop">
          <Typography.Text className="pk-name">
            Height
          </Typography.Text>
          <Typography.Text>
            {height}
          </Typography.Text>
        </div>
        <div className="pk-prop">
          <Typography.Text className="pk-name">
            Weight
          </Typography.Text>
          <Typography.Text>
            {weight}
          </Typography.Text>
        </div>
        <div className="pk-prop">
          <Typography.Text className="pk-name">
            Shiny
          </Typography.Text>
          <div className="shiny-list">
            {shiny.map((img, index) => (
              <div className="shiny-pokemon">
                <img
                  key={index}
                  src={img}
                  alt="shiny-pokemon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </CardPokemonDetailStyled>
);

CardPokemonDetail.defaultProps = {
  name: '',
  type: [],
  shiny: [],
  pokedex: '',
  height: '',
  weight: '',
};

CardPokemonDetail.propTypes = {
  pokedex: PropTypes.number,
  height: PropTypes.number,
  weight: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.arrayOf(PropTypes.object),
  shiny: PropTypes.arrayOf(PropTypes.string),
};

export default CardPokemonDetail;
