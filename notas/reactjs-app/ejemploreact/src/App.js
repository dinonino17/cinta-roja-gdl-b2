import React, { Component } from 'react';
import logo from './logo.svg';
import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from './MySecondComponent';
import './App.css';
import MyThirdComponent from './MyThirdComponent';

class App extends Component {
  render() { //metodo de clase, cualquier componente debe utilizar el metodo render es obligatorio
    return (
      <div className="App">
        <MyThirdComponent plainText={"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."} title={"Hello, world!"} image={"https://www.klika.mx/wp-content/uploads/2017/08/devf.png"} />
      </div>
    );
  }
}

export default App;
