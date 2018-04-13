import React from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';
import { Row, Col} from 'antd';

const CommentList = (props) => (
  <div>
    {props.comments.length !== 0 && (
    <div>
      <div className="space" />
      <Row type="flex" justify="center">
        <Col className="gutter-row" span={2}>
          <div className="gutter-box">Author</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className="gutter-box">Comment</div>
        </Col>
        <Col className="gutter-row" span={2}>
          <div className="gutter-box">Vote Score</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div className="gutter-box">Actions</div>
        </Col>
      </Row>
      {props.comments.map((comment) => {
        return <Comment key={comment.id} {...comment}/>
      })}
    </div>
    )}
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