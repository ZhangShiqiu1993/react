import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import selectPost from '../selectors/post';

const PostList = (props) => (
  <div>
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