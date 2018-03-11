import React from 'react';
import {Link} from 'react-router-dom';

const PostListItem =
  ({id, title, body, author, category, voteScore, commentCount}) => (
  <div>
    <Link to={`/posts/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>author - {author}</p>
    <p>comment: {commentCount}</p>
    <p>current score: {voteScore}</p>
    <p>body - {body}</p>

    <Link to={`/${category}`}>category - {category}</Link>
  </div>
);

export default PostListItem;