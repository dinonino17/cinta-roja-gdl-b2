import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {create_post} from '../actions/postActions'
class PostForm extends React.Component{
    
    state={
        postTitle:'',
        postBody:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        let postData = {
            title: this.state.postTitle,
            body:this.state.postBody
        }
        this.props.create_post(postData);
    }
    render(){
        return(
            <div>
                <h1></h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" value={this.state.postTitle} onChange={(e)=> {this.setState({postTitle:e.target.value})}}/>
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <textarea type="text" name="body" value={this.state.postBody} onChange={(e) => {this.setState({postBody:e.target.value})}} />
                    </div>
                    <button type="submit"> Submit </button>
                </form>
            </div>

        )
    }
}

PostForm.propTypes={
    create_post:PropTypes.func.isRequired
}

export default connect(null, {create_post})(PostForm);