import React from 'react';
import AllRoutes from './AllRoutes.Component';
import CreatePost from '../CreatePost/CreatePost.Component';
import App from '../App/App.Component';
import NotFoundPage from '../NotFoundPage/NotFoundPage.Component';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe('AllRoutes', () => {
let getMockRouter;
  beforeAll(() => {
    const reactRouterDom = require('react-router-dom');
    getMockRouter = jest.spyOn(reactRouterDom, 'BrowserRouter');
    getMockRouter.mockImplementation(({children}) => {
      return <div>{children}</div>
    });
  });
  afterAll(() => {
    getMockRouter.mockRestore();
  });
  it('directs to landing page at route "/"', () => {
    const wrapper = mount(<MemoryRouter initialEntries={["/"]}>
        <AllRoutes />
        </MemoryRouter>);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
    expect(wrapper.find(CreatePost)).toHaveLength(0);
    expect(wrapper.find(App)).toHaveLength(1);
    

  });
  it('directs to create post page at route "/posts"', () => {
    const wrapper = mount(<MemoryRouter initialEntries={["/post"]}>
        <AllRoutes />
        </MemoryRouter>);
    
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
    expect(wrapper.find(CreatePost)).toHaveLength(1);
    expect(wrapper.find(App)).toHaveLength(0);

  });
  it('directs to not found page at undefined route', () => {
    const wrapper = mount(<MemoryRouter initialEntries={["/random"]}>
        <AllRoutes />
        </MemoryRouter>);
    
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
    expect(wrapper.find(CreatePost)).toHaveLength(0);
    expect(wrapper.find(App)).toHaveLength(0);
  });
});