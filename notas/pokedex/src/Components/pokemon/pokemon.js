import React from 'react'
import { Image,Data,PokemonCard } from "./Pokemon.styled";

const Pokemon = ({number,name,image,onSelected}) => (
    <PokemonCard onClick={()=>onSelected(name,image)}>
        <Image src={image}/>
        <Data>
            <span>#{number}</span>
            <br/>
            <span> {name}</span>
        </Data>
    </PokemonCard>
);



export default Pokemon