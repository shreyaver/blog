import React from 'react';
import renderer from 'react-test-renderer';
import CreatePost from '.';

describe('CreatePost', () => {
  it('renders without crashing', () => {
    const createPost = renderer.create(<CreatePost />).toJSON();
    expect(createPost).toMatchSnapshot();
  });
})
