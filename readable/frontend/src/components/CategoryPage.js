import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostDetailPage from './PostDetailPage';

class CategoryPage extends Component {
  render() {
    return (
      <div>
        <h3>Category</h3>
        <p>{this.props.posts.length}</p>
        {this.props.posts && this.props.posts.map((post) => (
          <PostDetailPage key={post.id} {...post}/>
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