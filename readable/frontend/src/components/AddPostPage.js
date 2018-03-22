import React, {Component} from 'react';
import PostForm from './PostForm';
import {addPost} from "../actions/posts";
import {connect} from 'react-redux';
import * as API from '../utils/api';
import uuid from "uuid";


class AddPostPage extends Component {
  onSubmit = (post) => {
    post = {
      ...post,
      id: uuid(),
    };
    API.addPost(post).then(() => {
      this.props.dispatch(addPost(post));
    });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <PostForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default connect()(AddPostPage);