import React from 'react';
import {Link} from 'react-router-dom';

const PostListItem =
  ({ id, timestamp, title, body, author, category, voteScore, deleted, commentCount }) => (
  <div>
    <Link to={`/posts/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>author - {author}</p>
    <p>comment: {commentCount}</p>
    <p>current score: {voteScore}</p>
    <p>body - {body}</p>

    <Link to={`/${category}`}>category - {category}</Link>
    <br/>
    <button>upvote</button>
    <button>downvote</button>
    <button>edit</button>
    <button>delete</button>
  </div>
);

export default PostListItem;