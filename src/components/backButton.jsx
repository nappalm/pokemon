import styled from 'styled-components';
import ArrowIcon from 'assets/icons/Back.svg';
import PropTypes from 'prop-types';

const BackButtonStyled = styled.div`
  background-color: var(--blue);
  border-radius: var(--border-radius);
  padding: 6px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .arrow-button {
    height: 20px;
  }
`;
const BackButton = ({ onClick }) => (
  <BackButtonStyled onClick={onClick}>
    <img
      className="arrow-button"
      src={ArrowIcon}
      alt="arrow-icon"
    />
  </BackButtonStyled>
);

BackButton.defaultProps = {
  onClick: () => {},
};

BackButton.propTypes = {
  onClick: PropTypes.func,
};

export default BackButton;
