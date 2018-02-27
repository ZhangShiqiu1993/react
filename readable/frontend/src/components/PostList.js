import React from 'react';
import {connect} from 'react-redux';
import PostListItem from './PostListItem';

const PostList = (props) => (
  <div>
    <h1>Post List</h1>
    {props.posts.map((post) => {
      return <PostListItem key={post.id} {...post}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: state.posts.filter((post) => !post.deleted)
  };
};

export default connect(mapStateToProps)(PostList);