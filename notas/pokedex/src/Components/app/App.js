import React, {Component} from 'react';
import logo from '../../logo.svg';
import PokemonList from "../PokemonList/List";
import './App.css';


class App extends Component {

    constructor(){
        super();
        this.state ={
            name: "Welcome to React",
            image: ""
        }
    }

    selectPokemon = (name,image)=>{
        this.setState({
            name: name,
            image: image
        })

        this.scrollToTop();
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), 1.66);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={this.state.image || logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">{this.state.name}</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <PokemonList
                    onSelect={this.selectPokemon}
                />

            </div>
        );
    }
}

export default App;
