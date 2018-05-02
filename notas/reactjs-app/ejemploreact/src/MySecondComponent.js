import React,{Component} from 'react';

class MySecondComponent extends Component{
    render(){
        return  (
            <div>
            <h1>{this.props.title}</h1>
            <img src= {this.props.image} />
            <p>{this.props.plainText}</p>
            </div>
        ) 
        
    }
}

export default MySecondComponent;