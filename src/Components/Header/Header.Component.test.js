import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.Component';

describe('Header', () => {
  it('renders without crashing', () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
