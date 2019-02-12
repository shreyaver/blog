import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '.';

describe('NotFoundPage', () => {
  it('renders without crashing', () => {
    const notFoundPage = renderer.create(<NotFoundPage />).toJSON();
    expect(notFoundPage).toMatchSnapshot();
  });
});
