/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import PropTypes from 'prop-types';

import MenuIcon from 'assets/icons/Menu.svg';
import Logo from 'assets/logo.png';

import Avatar from './avatar';
import User from './user';
import Logout from './logout';

import NavStyled from './style';

const Nav = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const handleToggleMenu = () => {
    setMenu(!menu);
  };

  const onClickLogoItem = () => {
    window.location.href = '/';
  };

  return (
    <NavStyled>
      <div className="nav-responsive">
        <div className="nav-responsive-content">
          <div className="nav-menu-item">
            <button
              type="button"
              onClick={handleToggleMenu}
            >
              <img src={MenuIcon} alt="" />
            </button>
          </div>
          <div
            onClick={onClickLogoItem}
            className="nav-menu-logo"
          >
            <img src={Logo} alt="" className="img-logo" />
          </div>
        </div>
      </div>
      <div className={`nav-content ${menu ? ' show-menu' : ''}`}>
        <div
          onClick={onClickLogoItem}
          className="nav-menu-logo"
        >
          <img src={Logo} alt="" className="img-logo" />
        </div>
        {children}
      </div>
    </NavStyled>
  );
};

Nav.defaultProps = {
  children: null,
};

Nav.propTypes = {
  children: PropTypes.node,
};

Nav.Avatar = Avatar;
Nav.User = User;
Nav.Logout = Logout;

export default Nav;
