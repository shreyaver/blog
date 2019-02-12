import React from 'react';
import renderer from 'react-test-renderer';
import PostReaction from '.';
import { shallow } from 'enzyme';

describe('PostReaction', () => {
  it('renders without crashing', () => {
    const cardData = {
        "liked": false,
        "claps": 11
    }
    const postReaction = renderer.create(<PostReaction liked = {cardData.liked}  claps = {cardData.claps}/>).toJSON();
    expect(postReaction).toMatchSnapshot();
  });
  it('sets correct class when post is liked', () => {
    const cardData = {
        "liked": true,
        "claps": 11
    }   
    const wrapper = shallow(<PostReaction liked = {cardData.liked}  claps = {cardData.claps} />);
    expect(wrapper.exists('.Liked-heart-icon')).toEqual(true);
  });
  it('sets correct class when post is not liked', () => {
    const cardData = {
        "liked": false,
        "claps": 11
    }   
    const wrapper = shallow(<PostReaction liked = {cardData.liked}  claps = {cardData.claps} />);
    expect(wrapper.exists('.Heart-icon')).toEqual(true);
  })
})