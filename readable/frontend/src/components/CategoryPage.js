import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';

class CategoryPage extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.category}</h3>
        {this.props.posts && this.props.posts.map((post) => (
          <Post key={post.id} {...post}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const category = props.match.params.category;
  return {
    posts: state.posts.filter((post) => post.category === category)
  }
};

export default connect(mapStateToProps)(CategoryPage);