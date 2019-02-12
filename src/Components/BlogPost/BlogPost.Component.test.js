import React from 'react';
import renderer from 'react-test-renderer';
import BlogPost from './BlogPost.Component';
import { shallow } from 'enzyme';

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
  const initialState = {
    liked: cardData.liked,
    claps: cardData.claps
}
  const wrapper = shallow(<BlogPost cardData = {cardData} />);
  beforeEach(() => {
    wrapper.instance().setState(initialState);
  });
  it('renders without crashing', () => {
    const blogPost = renderer.create(<BlogPost cardData = {cardData} />).toJSON();
    expect(blogPost).toMatchSnapshot();
  });
  
  it('changes liked state', () => {
    
    wrapper.instance().handleLike();
    expect(wrapper.instance().state.liked).toEqual(true);
  });
  it('changes claps state', () => {
    
    wrapper.instance().handleClap();
    expect(wrapper.instance().state.claps).toEqual(cardData.claps+1);
  });
})