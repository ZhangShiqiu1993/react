import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostListItem extends Component {
  render() {
    const {id, title, body, author, category, voteScore, deleted, commentCount} = this.props;
    console.log(this.props);
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
        <br/>
        <button>upvote</button>
        <button>downvote</button>
        <button>delete</button>
      </div>
    );
  }
}

export default PostListItem;