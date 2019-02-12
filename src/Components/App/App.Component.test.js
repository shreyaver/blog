import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.Component';
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
  it('renders without crashing for loading page', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
  it('renders without crashing after data is fetched', async () => {
    const app = renderer.create(<App />);
    await app.toTree().instance.componentDidMount();
    expect(app.toJSON()).toMatchSnapshot();
  });
  it('sets initial state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance().state.cardDataArr).toEqual([]);
  });
  it('sets state to fetched data', async (done) => {
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.cardDataArr).toEqual(mockPosts);
    done();
  });
});

