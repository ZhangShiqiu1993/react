import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as API from "../utils/api";
import {deleteComment, downVoteComment, upVoteComment} from "../actions/comments";
import {removePostComment} from "../actions/posts";

class Comment extends Component {
  upvote = () => {
    const id = this.props.id;
    API.voteOnComment(id, "upVote").then(() => {
      this.props.dispatch(upVoteComment(id));
    });
  };

  downvote = () => {
    const id = this.props.id;
    API.voteOnComment(id, 'downVote').then(() => {
      this.props.dispatch(downVoteComment(id))
    });
  };

  deleteComment = () => {
    const id = this.props.id;
    API.deleteComment(id).then(() => {
      this.props.dispatch(deleteComment(id));
      this.props.dispatch(removePostComment(this.props.parentId));
    });
  };

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