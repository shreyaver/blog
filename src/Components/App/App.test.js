import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';
import cardDataArr from '../../mockData';
import { BrowserRouter as Router, Route } from 'react-router-dom'

describe('App', () => {
  it('renders without crashing', () => {
    const app = renderer.create(<App cardDataArr = {cardDataArr}/>).toJSON();
    expect(app).toMatchSnapshot();
  });
});
