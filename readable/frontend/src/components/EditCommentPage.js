import React from 'react';
import * as API from "../utils/api";
import {connect} from "react-redux";
import CommentForm from './CommentForm';
import {deleteComment, editComment} from "../actions/comments";
import {Button} from 'antd';

const EditCommentPage = (props) => {
  const {comment, post} = props;
  return (
    <div>
      {!!comment && (
        <div>
          <h3>Edit Comment or
            <Button
              type={"danger"}
              onClick={() => {
                API.deleteComment(comment.id).then(() => {
                  props.dispatch(deleteComment(comment.id));
                });
                props.history.push('/');
              }}
            >delete</Button>
          </h3>
          <CommentForm
            parent={props.post}
            comment={comment}
            onSubmit={(comment) => {
              API.editComment(props.comment.id, comment).then(() => {
                props.dispatch(editComment(props.comment.id, comment));
              });
              props.history.push(`/${post.category}/${post.id}`);
            }}
          />
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