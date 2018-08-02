import React, { Component } from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import {GenDiv} from "./GeneralDivCat.styled"

class GeneralDivCat extends Component{
    render(){
        return(
         <GenDiv>
             <hr />
             <h1>{this.props.categorieDiv}</h1>
             <hr />
             </GenDiv>
        )
    }
}
export default GeneralDivCat