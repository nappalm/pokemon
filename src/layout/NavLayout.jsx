import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { device } from 'utils/screenSize';
import { navProps } from 'components/nav/constants';
import { Nav } from 'components';
import { UserContextProvider } from '../context/userContext';

const NavLayoutStyled = styled.div`
  @media ${device.mobileS} {
    .nav-layout-content {
      margin: 0;
      padding: 100px 20px 20px 20px;
    }
  }
  @media ${device.tablet} {
    .nav-layout-content {
      margin-left: ${navProps.baseWith};
      margin-right: 40px;
      padding-left: 40px;
      padding-top: 20px;
    }
  }
`;
const NavLayout = ({ children }) => {
  const { user } = useContext(UserContextProvider);

  return (
    <NavLayoutStyled>
      {/* 🔰 Nav component */}
      <Nav>
        <Nav.Avatar img={user.img} />
        <Nav.User
          name={user.name}
          level={user.level}
          text={user.text}
        />
        <Nav.Logout />
      </Nav>

      {/* 🔰 Render component */}
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
