import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UserContextProvider } from '../context/userContext';
import { Nav } from '../components';

const NavLayoutStyled = styled.div`
  display: flex;
  gap: 20px;
`;
const NavLayout = ({ children }) => {
  const { user } = useContext(UserContextProvider);

  return (
    <NavLayoutStyled>
      <Nav>
        <Nav.Avatar img={user.img} />
        <Nav.User
          name={user.name}
          level={user.level}
          text={user.text}
        />
        <Nav.Logout />
      </Nav>
      <div className="nav-layout-content">
        {children}
      </div>
    </NavLayoutStyled>
  );
};

NavLayout.defaultProps = {
  children: null,
};

NavLayout.propTypes = {
  children: PropTypes.node,
};

export default NavLayout;
