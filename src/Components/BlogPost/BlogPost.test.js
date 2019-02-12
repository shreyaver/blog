import React from 'react';
import renderer from 'react-test-renderer';
import BlogPost from '.';

describe('BlogPost', () => {
  const cardData = {
    "date": "2nd Januray, 2018",
    "readingTime": "2 mins",
    "title": "The future of abstract art and the culture ...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 10,
    "liked": false,
    "image": "abstract.png"
  }
  it('renders without crashing', () => {
    const blogPost = renderer.create(<BlogPost cardData = {cardData} />).toJSON();
    expect(blogPost).toMatchSnapshot();
  });
})