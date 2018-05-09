import React, {Component} from 'react'
//se necesita component por que este componente no es puro
import Pokemon from '../pokemon/pokemon'
import {Container} from './list.styled'

const pokemonData = require('./pokemon.json')

class PokemonList extends Component {
    constructor(){
        super();
        this.state={
            data : []
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                data : pokemonData
            })
        },3000)
    }
    render(){
        if(this.state.data.length === 0){
            return <div>Loading...</div>
        }

        return (
            <Container>
                {this.state.data.map(pokemon => 
                    <Pokemon 
                    name ={pokemon.name}
                    image ={pokemon.image}
                    number ={pokemon.number}
                    onSelect={this.props.onSelect}
                    key = {pokemon.id}
                />
                )}

            </Container>
        )
    }

}

export default PokemonList