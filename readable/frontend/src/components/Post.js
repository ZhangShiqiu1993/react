import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {upVotePost, downVotePost, deletePost} from "../actions/posts";
import * as API from "../utils/api";

class Post extends Component {
  upvote = () => {
    const id = this.props.id;
    API.voteOnPost(id, "upVote").then(() => {
      this.props.dispatch(upVotePost(id));
    });
  };

  downvote = () => {
    const id = this.props.id;
    API.voteOnPost(id, 'downVote').then(() => {
      this.props.dispatch(downVotePost(id))
    });
  };

  deletePost = () => {
    const id = this.props.id;
    API.deletePost(id).then(() => {
      this.props.dispatch(deletePost(id));
    });
  };

  render() {
    const {id, title, body, author, category, voteScore, commentCount} = this.props;
    return (
      <div>
        <Link to={`/${category}/${id}`}>
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
        <Link to={`/posts/${id}`}>
          <p>edit</p>
        </Link>
      </div>
    );
  }
}

export default connect()(Post);