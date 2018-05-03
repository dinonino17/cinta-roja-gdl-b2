import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Carousel} from 'react-bootstrap';
import './Bonis.css'

class MySecondComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoDefault: 'Mi valor por defecto'
        }
    }
    handleClick = (event) =>{
        event.preventDefault();
        this.setState({
            textoDefault: 'Texto cambiado'
        })
    }

    render(){
        return  (
            <div>
           <Jumbotron id="mainJumbo">
                <h1>{this.state.textoDefault}</h1>
                <img src={this.props.image} />
                <p>{this.props.plainText}
                </p>
                <p>
                    <Button onClick={this.handleClick} bsStyle="success">Learn more</Button>
                </p>
            </Jumbotron>

            </div>
        ) 
    }
}

export default MySecondComponent;