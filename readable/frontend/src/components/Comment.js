import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as API from "../utils/api";
import {deleteComment, downVoteComment, upVoteComment} from "../actions/comments";
import {removePostComment} from "../actions/posts";

class Comment extends Component {
  render() {
    const {id, title, body, author, voteScore} = this.props;
    return (
      <div>
        comment: {id}
        <h3>{title}</h3>
        <p>author - {author}</p>
        <p>current score: {voteScore}</p>
        <p>body - {body}</p>
        <button onClick={this.upvote}>upvote</button>
        <button onClick={this.downvote}>downvote</button>
        <button onClick={this.deleteComment}>delete</button>
        <Link to={`/comments/${id}`}>
          <p>edit</p>
        </Link>
      </div>
    );
  }
}

export default connect()(Comment);