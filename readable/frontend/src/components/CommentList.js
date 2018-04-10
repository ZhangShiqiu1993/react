import React from 'react';
import {connect} from 'react-redux';
import CommentListItem from './CommentListItem';

const CommentList = (props) => (
  <div>
    <h3>comment</h3>
    {props.comments.map((comment) => {
      return <CommentListItem key={comment.id} {...comment}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    comments: state.comments.filter(({deleted, parentDeleted}) => !deleted && !parentDeleted)
  };
};

export default connect(mapStateToProps)(CommentList);