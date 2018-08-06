import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetch_post} from '../actions/postActions'

class Post extends React.Component{


    componentWillMount(){
        this.props.fetch_post();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render(){
        let postData=this.props.posts.map(post =>{
            return(
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    </div>
            )
        })
        return(
            <div>
                <h1>Postsss!!</h1>
                {postData}
            </div>
        )
    }
}
Post.propTypes={
    fetch_post:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
}

const mapStateToProps = (state) => ({
    posts:state.posts.items,
    newPost:state.posts.item
})

export default connect(mapStateToProps,{fetch_post})(Post);