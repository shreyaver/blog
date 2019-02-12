import mockPosts from '../../mockData';
import axios from 'axios';
import getRequest from './request.js';

describe('getRequest()', () => {
  let getMockHelper;
  beforeAll(() => {
    getMockHelper = jest.spyOn(axios, 'get');
    getMockHelper.mockImplementation(() => {
      return Promise.resolve({ 'data': mockPosts })
    });
  });
  afterAll(() => {
    getMockHelper.mockRestore();
  });
  it('fetches data', async() => {
    expect((await getRequest()).data).toEqual(mockPosts);
  });
});

