import React from 'react';
import renderer from 'react-test-renderer';
import LoadingPage from './LoadingPage.Component.js';

describe('LoadingPage', () => {
  it('renders without crashing', () => {
    const loadingPage = renderer.create(<LoadingPage />).toJSON();
    expect(loadingPage).toMatchSnapshot();
  });
});
