import React, { Component } from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'

class NavigationCategories extends Component{
    render(){
        return(
            <Navbar fluid="true">
                <Nav>
                    <NavDropdown eventKey={3} title="Relojes" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.2}>Hombre</MenuItem>
                    <MenuItem eventKey={3.3}>Mujer</MenuItem>
                    <MenuItem divider />
                    <Navbar.Brand >
                    <a href="#home">Marca</a>
                    </Navbar.Brand>
                    <MenuItem eventKey={3.4}>Fossil</MenuItem>
                    <MenuItem eventKey={3.4}>Casio</MenuItem>
                    </NavDropdown>
                    <Navbar.Text pullRight>
                    Signed in as: <Navbar.Link pullRight href="#">Nombre</Navbar.Link>
                    </Navbar.Text>
                </Nav>
            </Navbar>
        )
    }
}
export default NavigationCategories