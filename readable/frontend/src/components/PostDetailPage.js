import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
};

export default connect()(PostDetailPage);