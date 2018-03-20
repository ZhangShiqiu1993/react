import React from 'react';
import PostForm from './PostForm';
import {addPost} from "../actions/posts";
import {connect} from 'react-redux';

const AddPostPage = (props) => (
  <div>
    <h1>Add Post</h1>
      <PostForm
        onSubmit={(post) => {
          props.dispatch(addPost(post));
          props.history.push('/');
        }}
      />

  </div>
);

export default connect()(AddPostPage);