import React from 'react';
import renderer from 'react-test-renderer';
import AllPosts from '.';
import cardDataArr from '../../mockData';

describe('AllPosts', () => {
  it('renders without crashing', () => {
    const allPosts = renderer.create(<AllPosts cardDataArr = {cardDataArr} />).toJSON();
    expect(allPosts).toMatchSnapshot();
  });
})