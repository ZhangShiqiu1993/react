import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as API from "../utils/api";

class CommentListItem extends Component {
  render() {
    const {id, title, body, author, category, voteScore} = this.props;
    return (
      <div>

        <h3>{title}</h3>
        <p>author - {author}</p>
        <p>current score: {voteScore}</p>
        <p>body - {body}</p>

      </div>
    );
  }
}

export default connect()(CommentListItem);