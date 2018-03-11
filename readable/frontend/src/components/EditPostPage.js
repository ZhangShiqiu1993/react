import React from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';

const EditPostPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Edit Post Post</h1>
      <PostForm
        post={props.post}
      />
      <p>post id: {props.post.id}</p>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditPostPage);