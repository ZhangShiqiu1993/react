import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';

const CategoryPage = ({match, posts}) => (
  <div>
    <h3>{match.params.category}</h3>
    {posts && posts.map((post) => (
      <Post key={post.id} {...post}/>
    ))}
  </div>
);

const mapStateToProps = (state, props) => {
  const category = props.match.params.category;
  return {
    posts: state.posts.filter((post) => post.category === category)
  }
};

export default connect(mapStateToProps)(CategoryPage);