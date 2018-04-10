import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import selectPost from '../selectors/post';

const PostList = (props) => (
  <div>
    <h1>Post List</h1>
    {props.posts.map((post) => {
      return <Post key={post.id} {...post}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: selectPost(state.posts, state.filter)
  };
};

export default connect(mapStateToProps)(PostList);