import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {deletePost, editPost} from '../actions/posts';
import * as API from "../utils/api";


const EditPostPage = (props) => {
  const post = props.post;
  return (
    <div>
      <h1>Edit Post Post</h1>
      {!!post && (
        <div>
          <PostForm
            post={post}
            onSubmit={(post) => {
              API.editPost(props.post.id, post).then(() => {
                props.dispatch(editPost(props.post.id, post));
              });
              props.history.push('/');
            }}
          />
          <button onClick={() => {
            API.deletePost(post.id).then(() => {
              props.dispatch(deletePost(post.id));
            });
            props.history.push('/');
          }}>delete</button>
          <p>post id: {post.id}</p>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditPostPage);