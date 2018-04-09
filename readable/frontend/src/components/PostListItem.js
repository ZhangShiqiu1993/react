import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {upVotePost, downVotePost} from "../actions/posts";
import {voteOnPost} from '../utils/api';

class PostListItem extends Component {
  upvote = () => {
    const id = this.props.id;
    voteOnPost(id, "upVote").then(() => {
      this.props.dispatch(upVotePost(id));
    });
  };

  downvote = () => {
    const id = this.props.id;
    voteOnPost(id, 'downVote').then(() => {
      this.props.dispatch(downVotePost(id))
    });
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
        <button onClick={this.deletePost}>delete</button>

      </div>
    );
  }
}

export default connect()(PostListItem);