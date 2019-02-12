import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';
import { shallow } from 'enzyme';
import mockPosts from '../../mockData';
import axios from 'axios';

describe('App', () => {
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'get');
    getMock.mockImplementation(() => {
      return Promise.resolve({ 'data': mockPosts })
    });
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('renders without crashing', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
  it('sets initial state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state.cardDataArr).toEqual([]);
  });
  it('fetches data', async () => {
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.cardDataArr).toEqual(mockPosts);
  });
});

