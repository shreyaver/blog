import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';
import cardDataArr from '../../mockData';

describe('App', () => {
  it('renders without crashing', () => {
    const app = renderer.create(<App cardDataArr = {cardDataArr} />).toJSON();
    expect(app).toMatchSnapshot();
  });
})