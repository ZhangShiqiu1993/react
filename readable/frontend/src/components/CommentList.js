import React from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';

const CommentList = (props) => (
  <div>
    <h3>comment</h3>
    {props.comments.map((comment) => {
      return <Comment key={comment.id} {...comment}/>
    })}
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments.filter(
      ({deleted, parentId, parentDeleted}) => !deleted && !parentDeleted && parentId === props.parentId
    )
  };
};

export default connect(mapStateToProps)(CommentList);