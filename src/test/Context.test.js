/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import UserContext, { userObj } from 'context/userContext';

import NavLayout from '../layout/NavLayout';

const customRender = (ui, { providerProps, ...renderOptions }) => render(
  <UserContext {...providerProps}>
    {ui}
  </UserContext>,
  renderOptions,
);

test('Show user data by context provider', () => {
  const providerProps = {
    value: {
      user: userObj,
    },
  };

  const component = customRender(<NavLayout />, { providerProps });
  component.getByText('ASHK123');
  component.getByText('Level 1');
  component.getByText('"Work hard on your test"');
});
