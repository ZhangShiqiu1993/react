import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getCommentsByPost} from '../utils/api';
import {connect} from 'react-redux';
import {loadComments} from "../actions/comments";

const PostDetailPage =
({ id, timestamp, title, body, author, category, voteScore, deleted, commentCount }) => {
  return (
    <div>
      <Link to={`/posts/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>body - {body}</p>
      <p>author - {author}</p>
      <p>number of comment: {commentCount}</p>
      <p>current score: {voteScore}</p>
      <button>upvote</button>
      <button>downvote</button>
      <button>edit</button>
      <button>delete</button>
      {/*<p>{this.props.comments.length}</p>*/}
    </div>
  );
}

function mapDispatchToProps (dispatch, props) {
  return {
    getComments: () => {
      const comments = getCommentsByPost(props.id);
      comments.then((comments) => {
        dispatch(loadComments(comments))
      })
    }
  }
}


export default connect()(PostDetailPage);