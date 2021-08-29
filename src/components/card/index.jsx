import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardStyled = styled.div.attrs({
  className: 'pk-card',
})`
  border-radius: var(--border-radius);
  padding: 20px;
  box-shadow: var(--shadow);
`;
const Card = ({ onClick, children, ...restProps }) => (
  <CardStyled onClick={onClick} {...restProps}>
    {children}
  </CardStyled>
);

Card.defaultProps = {
  children: null,
  onClick: () => {},
};

Card.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card;
