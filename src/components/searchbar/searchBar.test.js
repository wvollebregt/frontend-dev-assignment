import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './searchBar';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchBar />', () => {
  let wrapper;
  let input;
  let spy;

  beforeEach(() => {
    wrapper = Enzyme.shallow(<SearchBar />);
    input = wrapper.find('#searchBarInput');
  }); 

  afterEach(() => {
    wrapper = null;
  });

  it('has the initial state focus set to false', () => {
    expect(wrapper.state().focus).toEqual(false);
  });

  it('should toggle focus state to true on input getting focus', () => {
    spy = jest.spyOn(wrapper.instance(), '_onFocus');
    
    input.simulate('focus');

    expect(spy).toHaveBeenCalled;
    expect(wrapper.state().focus).toEqual(true);
  });

  it('should toggle focus state to false on input losing focus', () => {
    spy = jest.spyOn(wrapper.instance(), '_onBlur');

    input.simulate('focus');
    input.simulate('blur');

    expect(spy).toHaveBeenCalled;
    expect(wrapper.state().focus).toEqual(false);
  });

  it('should toggle focus and update query state on input text "trui"', () => {
    spy = jest.spyOn(wrapper.instance(), '_onChange');

    input.simulate('change', { target: { value: 'trui' } });

    expect(spy).toHaveBeenCalled;
    expect(wrapper.state().focus).toEqual(true);
    expect(wrapper.state().searchquery).toEqual('trui');
  }); 
});
