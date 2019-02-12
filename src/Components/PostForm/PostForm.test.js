import React from 'react';
import renderer from 'react-test-renderer';
import PostForm from '.';

describe('PostForm', () => {
  it('renders without crashing', () => {
    const postForm = renderer.create(<PostForm />).toJSON();
    expect(postForm).toMatchSnapshot();
  });
})