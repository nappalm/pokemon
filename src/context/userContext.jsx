import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import AshImage from '../assets/avatar.png';

export const UserContextProvider = createContext();
const UserContext = ({ children }) => {
  const [user] = useState({
    name: 'ASHK123',
    level: 'Level 1',
    img: AshImage,
    text: '"Work hard on yout test"',
  });

  return (
    <UserContextProvider.Provider value={{ user }}>
      {children}
    </UserContextProvider.Provider>
  );
};

UserContext.defaultProps = {
  children: null,
};

UserContext.propTypes = {
  children: PropTypes.node,
};

export default UserContext;
