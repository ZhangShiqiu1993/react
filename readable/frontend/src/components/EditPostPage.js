import React from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {deletePost, editPost} from '../actions/posts';
import * as API from "../utils/api";
import {Button} from 'antd';

const EditPostPage = (props) => {
  const post = props.post;
  return (
    <div>
      {!!post && (
        <div>
          <h3>Edit Post or
            <Button
              type="danger"
              onClick={() => {
                API.deletePost(post.id).then(() => {
                  props.dispatch(deletePost(post.id));
                });
              props.history.push('/');
            }}>
              delete
            </Button>
          </h3>
          <PostForm
            post={post}
            onSubmit={(post) => {
              API.editPost(props.post.id, post).then(() => {
                props.dispatch(editPost(props.post.id, post));
              });
              props.history.push('/');
            }}
          />
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