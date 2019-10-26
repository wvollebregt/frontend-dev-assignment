import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      searchquery: ''
    }

    this.handleSearchReset = this._onReset.bind(this)
  }

  _onReset() {
    this.props.changeState(this.state.focus, this.state.searchquery);
  }

  render() {
    const buttonType = this.props.buttonType;
    const buttonClassName = `${this.props.buttonClass} ${buttonType}`;
    let buttonAction = null;
    if (buttonType === 'reset') { buttonAction = this.handleSearchReset };

    return (
      <button 
        className={buttonClassName} 
        type={buttonType} 
        onClick={buttonAction}
      ></button>
    );
  }
}
  
export default Button;
