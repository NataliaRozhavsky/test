import React, { Component } from 'react';

class Kotik extends Component {
  constructor(props) {
  	super(props);
  	this.speak = this.speak.bind(this);
  }

  speak() {
  	alert("gav gav");
  	this.props.handleClick();
  }

  render() {
  	const { howMuch, milk} = this.props;
    return (
      <div onClick={this.speak}>
        Kotik Loklves Ptenchik ☺
        {howMuch}
        {milk}
      </div>
    );
  }
}

export default Kotik;
