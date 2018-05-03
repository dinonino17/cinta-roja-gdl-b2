import React, { Component } from 'react';
import logo from './logo.svg';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import './App.css';
import MyFourthComponent from './MyFourthComponent';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state={newText: 'Holi'};
}
handleChange(e) {
  this.setState({newText: e.target.value});
}

  render() { //metodo de clase, cualquier componente debe utilizar el metodo render es obligatorio


    return (
      <div className="App">
      <MyFourthComponent newText={this.state.newText}/>
      <input 
        value = {this.state.newText}
        onChange={this.handleChange}
      />
      </div>

    );
  }
}

export default App;
