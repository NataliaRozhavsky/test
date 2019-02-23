import React, { Component } from 'react';
import Kotik from './klp';
import Counter from './counter';

class App extends Component {
  speak() {
    alert("mew mew");
  }

  render() {
    return (
      <div>
        <Kotik 
          handleClick={this.speak} 
          milk="mew" 
          howMuch={1000*1000*1000} 
        />
        <Counter
          count={10}
        />
      </div>
      
    );
  }
}

export default App;
