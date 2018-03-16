import React from 'react';
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {deletePost} from '../actions/posts';

const EditPostPage = (props) => {
  const post = props.post;
  console.log(props);
  return (
    <div>
      <h1>Edit Post Post</h1>
      {!!props.post && (
        <div>
          <PostForm
            {...post}
          />
          <button onClick={() => {
            props.dispatch(deletePost(post.id));
            props.history.push('/');
          }}>delete</button>
          <p>post id: {post.id}</p>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = (state, props) => {
  console.log('mapStateToPros',state,'post', props.match.params.id);
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditPostPage);