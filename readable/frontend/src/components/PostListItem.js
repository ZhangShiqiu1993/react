import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {upVotePost, downVotePost} from "../actions/posts";

class PostListItem extends Component {
  upvote = (e) => {
    console.log("upvote", this.props.id);
    this.props.dispatch(upVotePost(this.props.id))
  };

  downvote = (e) => {
    console.log('downvote', this.props.id);
    this.props.dispatch(downVotePost(this.props.id))
  };

  render() {
    const {id, title, body, author, category, voteScore, commentCount} = this.props;
    return (
      <div>
        <Link to={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>author - {author}</p>
        <p>comment: {commentCount}</p>
        <p>current score: {voteScore}</p>
        <p>body - {body}</p>

        <Link to={`/${category}`}>category - {category}</Link>
        <button onClick={this.upvote}>upvote</button>
        <button onClick={this.downvote}>downvote</button>
      </div>
    );
  }
}

export default connect()(PostListItem);