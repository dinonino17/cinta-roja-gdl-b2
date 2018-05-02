import React, { Component } from 'react';
import logo from './logo.svg';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import './App.css';

class App extends Component {
  render() { //metodo de clase, cualquier componente debe utilizar el metodo render es obligatorio
    return (
      <div className="App">
        <MySecondComponent plainText={"Holi devf :)"} title={"Devf Welcome"} image={"https://www.klika.mx/wp-content/uploads/2017/08/devf.png"}  />
      </div>
    );
  }
}

export default App;
