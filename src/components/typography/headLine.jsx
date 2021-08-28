import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadLineStyled = styled.h1``;
const HeadLine = ({ children, ...restProps }) => (
  <HeadLineStyled {...restProps}>
    {children}
  </HeadLineStyled>
);

HeadLine.defaultProps = {
  children: null,
};

HeadLine.propTypes = {
  children: PropTypes.node,
};

export default HeadLine;
