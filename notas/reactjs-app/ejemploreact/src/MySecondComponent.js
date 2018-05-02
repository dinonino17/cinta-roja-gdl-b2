import React,{Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Bonis.css'



class MySecondComponent extends Component{
    render(){
        return  (

            <div class="jumbotron" id="mainJumbo" background-image={this.props.image}>
                <h1 class="display-4">{this.props.title}</h1>
                <img src={this.props.image} />
                <p class="lead">{this.props.plainText}</p>
            </div>
        ) 
    }
}

export default MySecondComponent;