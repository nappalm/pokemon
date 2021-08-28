import styled from 'styled-components';
import PropTypes from 'prop-types';

const AvatarStyled = styled.div.attrs({
  className: 'nav-avatar',
})`
  background: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 180px;
  width: 180px;
`;

const Avatar = ({ img }) => (
  <AvatarStyled
    img={img}
  />
);

Avatar.defaultProps = {
  img: '',
};

Avatar.propTypes = {
  img: PropTypes.string,
};

export default Avatar;
