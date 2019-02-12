import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from './NotFoundPage.Component.js';

describe('NotFoundPage', () => {
  it('renders without crashing', () => {
    const notFoundPage = renderer.create(<NotFoundPage />).toJSON();
    expect(notFoundPage).toMatchSnapshot();
  });
});
