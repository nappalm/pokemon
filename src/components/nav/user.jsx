import styled from 'styled-components';
import { Typography } from 'components';
import PropTypes from 'prop-types';

const UserStyled = styled.div.attrs({
  className: 'nav-user',
})`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 300;

  .user-name {
    font-size: 18px;
    font-weight: bold;
  }
  .user-text {
    margin-top: 30px;
  }
  .transparent {
    opacity: .8;
  }
`;
const User = ({ name, level, text }) => (
  <UserStyled>
    <Typography.Text className="user-name">
      {name}
    </Typography.Text>
    <Typography.Text className="transparent user-level">
      {level}
    </Typography.Text>
    <Typography.Text className="transparent user-text">
      {text}
    </Typography.Text>
  </UserStyled>
);

User.defaultProps = {
  name: '',
  level: '',
  text: '',
};

User.propTypes = {
  name: PropTypes.string,
  level: PropTypes.string,
  text: PropTypes.string,
};

export default User;
