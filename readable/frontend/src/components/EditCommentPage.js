import React from 'react';
import * as API from "../utils/api";
import {connect} from "react-redux";
import CommentForm from './CommentForm';
import {deleteComment, editComment} from "../actions/comments";

const EditCommentPage = (props) => {
  const comment = props.comment;
  return (
    <div>
      <h1>Edit Comment Post</h1>
      {!!comment && (
        <div>
          <CommentForm
            parent={props.post}
            comment={comment}
            onSubmit={(comment) => {
              API.editComment(props.comments.id, comment).then(() => {
                props.dispatch(editComment(props.comment.id, comment));
              });
              props.history.push('/');
            }}
          />
          <button onClick={() => {
            API.deleteComment(comment.id).then(() => {
              props.dispatch(deleteComment(comment.id));
            });
            props.history.push('/');
          }}>delete</button>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = (state, props) => {
  const comment = state.comments.find((comment) => comment.id === props.match.params.id);
  return {
    comment,
    post: state.posts.find((post) => post.id === comment.parentId)
  }
};

export default connect(mapStateToProps)(EditCommentPage);