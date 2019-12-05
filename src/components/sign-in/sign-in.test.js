import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.jsx';

it(`SignIn correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <SignIn
        submitHandler={jest.fn()}
      />).toJSON();
  expect(tree).toMatchSnapshot();
});
