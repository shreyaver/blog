import React from 'react';
import renderer from 'react-test-renderer';
import PostForm from './PostForm.Component.js';
import { shallow } from 'enzyme';
import axios from 'axios';

describe('PostForm', () => {
  const wrapper = shallow(<PostForm />);
  const cardData = {
    "date": "2nd Januray, 2018",
    "readingTime": "2 mins",
    "title": "The future of abstract art and the culture ...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 10,
    "liked": false,
    "image": "abstract.png"
  }
  let postMock;
  beforeAll(() => {
    postMock = jest.spyOn(axios, 'post');
    postMock.mockImplementation(() => {
      return Promise.resolve({ 'data': cardData })
    });
  });
  afterAll(() => {
    postMock.mockRestore();
  });
  it('renders without crashing', () => {
    const postForm = renderer.create(<PostForm />).toJSON();
    expect(postForm).toMatchSnapshot();
  });
  it('sets state to entered input', () => {
    wrapper.find('.title').simulate('change', { target: { className: 'title', value: 'ball' } });
    expect(wrapper.instance().state.title).toEqual('ball');
  });
  it('calls "handleSubmit()" on submitting form',() => {
    const mockFn=jest.fn();
    wrapper.instance().handleSubmit=mockFn();
    wrapper.find('.Form-content').simulate('submit', { target: { className: 'Form-content'}, preventDefault: jest.fn() });
    expect(mockFn).toHaveBeenCalled();
  });
  it('sends post request and receives response via "handleSubmit()"', async (done) => {
    const newWrapper = shallow(<PostForm />);
    expect(await newWrapper.instance().handleSubmit({preventDefault: jest.fn()} )).toEqual(cardData);
    done();
  });
});