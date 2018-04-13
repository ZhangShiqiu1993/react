import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as API from "../utils/api";
import {deleteComment, downVoteComment, upVoteComment} from "../actions/comments";
import {removePostComment} from "../actions/posts";
import { Row, Col, Button, Icon } from 'antd';

class Comment extends Component {
  deleteComment = () => {
    const id = this.props.id;
    API.deleteComment(id).then(() => {
      this.props.dispatch(deleteComment(id));
      this.props.dispatch(removePostComment(this.props.parentId));
    });
  };

  upvote = () => {
    const id = this.props.id;
    API.voteOnComment(id, "upVote").then(() => {
      this.props.dispatch(upVoteComment(id));
    });
  };

  downvote = () => {
    const id = this.props.id;
    API.voteOnComment(id, 'downVote').then(() => {
      this.props.dispatch(downVoteComment(id))
    });
  };

  render() {
    const {id, body, author, voteScore} = this.props;
    return (
      <div>
        <Row type="flex" justify="center">
          <Col className="gutter-row" span={2}>
            <div className="gutter-box">{author}</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">{body}</div>
          </Col>
          <Col className="gutter-row" span={2}>
            <div className="gutter-box">{voteScore}</div>
          </Col>
          <Col span={2} >
            <Button size="small" type="dash" onClick={this.upvote}><Icon type="up" />upvote</Button>
          </Col>
          <Col span={2}>
            <Button size="small" type="dash" onClick={this.downvote}><Icon type="down" />downvote</Button>
          </Col>
          <Col span={2}>
            <Link to={`/comments/${id}`}>
              <Button size="small" type="primary"><Icon type="edit" />edit</Button>
            </Link>
          </Col>
          <Col span={2}>
            <Button size="small" type="danger" onClick={this.deleteComment}><Icon type="delete" />delete</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Comment);