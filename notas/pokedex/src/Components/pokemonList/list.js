import React, {Component} from 'react'
import Pokemon from '../pokemon/Pokemon'
import {Container} from "./List.Styled";

const pokemonData = require('./pokemon.json')


class PokemonList extends Component{

    constructor() {
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                data:pokemonData
            })
        },3000)
    }


    render(){

        if (this.state.data.length===0){
            return <div> Loading.....</div>
        }

        return(
            <Container>
                {this.state.data.map(pokemon=>
                    (<Pokemon
                        name={ pokemon.name}
                        image={pokemon.image}
                        number={pokemon.number}
                        onSelected = {this.props.onSelect}
                        key={pokemon.id}
                    />)
                )}
            </Container>
        )
    }
}

export default PokemonList