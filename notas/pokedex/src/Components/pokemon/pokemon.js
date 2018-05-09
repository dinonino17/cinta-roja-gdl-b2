import React from 'react'
import {Image,Data,PokemonCard} from './pokemon.styled'

const Pokemon = ({number,name,image,onSelect}) =>(
        <PokemonCard onClick={()=>onSelect(name,image)}>
            <Image src={image} />
            <Data>
                <span>#{number} </span>
                <br />
                <span>{name}</span>
            </Data>
        </PokemonCard>
);

export default Pokemon
