import React, {Component} from 'react';
import {connect} from 'react-redux';
import CommentList from './CommentList';
import Post from './Post';
import NotFoundPage from './NotFoundPage';
import CommentForm from './CommentForm';
import {addComment} from "../actions/comments";
import * as API from "../utils/api";
import uuid from "uuid";
import {addPostComment} from "../actions/posts";

class PostDetailPage extends Component {
  onSubmit = (comment) => {
    comment = {
      ...comment,
      id: uuid()
    };
    API.addComment(comment).then(() => {
      this.props.dispatch(addComment(comment));
    }).then(() => {
      this.props.dispatch(addPostComment(this.props.match.params.post_id));
    });
  };

  render () {
    const {post, comments} = this.props;
    const jsx = !!post ? (
      <div>
        <h3>Post Detail Page</h3>
        <Post {...post}/>
        {!!comments && <CommentList parentId={post.id}/> }
        <CommentForm
          parent = {post}
          onSubmit={this.onSubmit}
        />

      </div>
    ) : (<NotFoundPage/>);
    return jsx;
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
    comments: state.comments.filter((comment) => !!comment && comment.parentId === id)
  }
};

export default connect(mapStateToProps)(PostDetailPage);