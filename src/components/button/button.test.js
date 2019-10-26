import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  let wrapper;
  let button;
  let spy;

  afterEach(() => {
    wrapper = null;
  });

  it('has the right type set', () => {
    wrapper = Enzyme.shallow(<Button 
      buttonType='reset' 
      buttonClass='searchBar__button' 
    />);

    expect(wrapper  .props.buttonType).toEqual('reset');
  });

  it('has runs changeState() when reset Button is clicked', () => {
    wrapper = Enzyme.shallow(<Button 
      buttonType='reset' 
      buttonClass='searchBar__button' 
    />);
    spy = jest.spyOn(wrapper.instance(), '_onReset');
    
    wrapper.simulate('click');
    
    expect(spy).toHaveBeenCalled;
    expect(wrapper.props.changeState()).toHaveBeenCalledWith(false, '');
  });
});
