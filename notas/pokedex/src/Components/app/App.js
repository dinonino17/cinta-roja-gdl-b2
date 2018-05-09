import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import PokemonList from "../pokemonList/list";

class App extends Component {

  constructor(){
    super();
    this.state ={
      name: "Welcome to react",
      image: ""
    }
  }
  selectPokemon = (name, image) =>{
    this.setState({
      name: name,
      image: image
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ this.state.image || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PokemonList
        onSelect={this.selectPokemon}/>
      </div>
    );
  }
}

export default App;
