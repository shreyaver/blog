import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button.Component';
import { shallow } from 'enzyme'

describe('Button', () => {
  it('renders without crashing', () => {
    
    const button = renderer.create(<Button caption = 'CREATE POSTS' />).toJSON();
    expect(button).toMatchSnapshot();
  });
  it('sets button caption to passed value', () => {
    
    const wrapper = shallow(<Button caption = 'CREATE POSTS' onClick={jest.fn()}/>);
    expect(wrapper.find('.Button').text()).toEqual('CREATE POSTS');
  });
  it('calls passed function on click', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Button caption = 'CREATE POSTS' onClick={mockFunction}/>);
    wrapper.find('.Button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });
});
