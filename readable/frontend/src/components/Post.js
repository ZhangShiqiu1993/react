import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {upVotePost, downVotePost, deletePost} from "../actions/posts";
import * as API from "../utils/api";
import { Row, Col, Button, Icon } from 'antd';

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
        <div className="space" />
        <Row gutter={16} type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">Title</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
            </div>
          </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">Author</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">{author}</div>
          </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">Body</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              {body}
            </div>
          </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">Category</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              <Link to={`/${category}`}>{category}</Link>
            </div>
          </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">Comment Number</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              {commentCount}
            </div>
          </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <div className="gutter-box">Current Score</div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              {voteScore}
            </div>
          </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
          <Col span={2} >
            <Button type="dash" onClick={this.upvote}><Icon type="up" />upvote</Button>
          </Col>
          <Col span={2}>
            <Button type="dash" onClick={this.downvote}><Icon type="down" />downvote</Button>
          </Col>
          <Col span={2}>
            <Link to={`/posts/${id}`}>
              <Button type="primary"><Icon type="edit" />edit</Button>
            </Link>
          </Col>
          <Col span={2}>
            <Button type="danger" onClick={this.deletePost}><Icon type="delete" />delete</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Post);