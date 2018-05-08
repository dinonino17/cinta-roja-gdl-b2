import React from 'react'
import {Image,Data,PokemonCard} from './pokemon.styled'

const Pokemon = ({number,name,image}) =>(
        <PokemonCard>
            <Image src={image} />
            <Data>
                <span>#{number} </span>
                <span>{name}</span>
            </Data>
        </PokemonCard>
);

export default Pokemon
