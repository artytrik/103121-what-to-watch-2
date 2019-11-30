import React from 'react';
import Enzyme, {mount} from 'enzyme';
import withActiveItem from './with-active-item.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);
const activeItem = mount(<MockComponentWrapped />);

it(`WithActiveItem returns false`, () => {
  expect(activeItem.state().isActive).toEqual(false);
});

it(`WithActiveItem turns true by active`, () => {
  activeItem.instance().itemEnterHandler();
  expect(activeItem.state().isActive).toEqual(true);
});
