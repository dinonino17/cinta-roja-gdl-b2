import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Carousel} from 'react-bootstrap';
import './Bonis.css'
import App from './App'

class MyFourthComponent extends Component{
    

    render(){
        return  (
            <div>
                <h1>El texto es: {this.props.newText}</h1>
            </div>
        ) 
    }
}

export default MyFourthComponent;