import styled from 'styled-components';

import PropTypes from 'prop-types';

const TextStyled = styled.div``;
const Text = ({ children, ...restProps }) => (
  <TextStyled {...restProps}>
    {children}
  </TextStyled>
);

Text.defaultProps = {
  children: null,
};

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
