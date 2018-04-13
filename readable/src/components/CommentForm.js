import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from "moment/moment";
import { Form, Input, Icon, Select, Button, Row, Col} from 'antd';
const Option = Select.Option;
const { TextArea } = Input;

class CommentForm extends Component {
  state = {
    author: this.props.comment ? this.props.comment.author: '',
    body: this.props.comment ? this.props.comment.body: '',
    parentId: this.props.comment ? this.props.comment.parentId: this.props.parent.id,
    voteScore: this.props.comment ? this.props.comment.voteScore: 0,
    timestamp: this.props.comment ? moment(this.props.comment.timestamp): moment(),
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {author, body, voteScore, timestamp, parentId} = this.state;
    if (!author || !body) {
      this.setState({error: "Please provide author and body"});
    } else {
      this.setState({error: "", author: "", body: "", timestamp: moment()});
      this.props.onSubmit({
        author, body, voteScore, parentId,
        timestamp: timestamp.valueOf()
      });
    }
  };

  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState({author});
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState({body});
  };

  onParentChange = (e) => {
    const parentId = e.target.value;
    this.setState({parentId});
  };

  upvote = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      voteScore: state.voteScore + 1
    }))
  };

  downvote = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      voteScore: state.voteScore - 1
    }))
  };

  render() {
    const {author, body, parentId, voteScore, error} = this.state;
    const parent = this.props.posts.find((post) => post.id === parentId);
    return (
      <div>
        <div className="space" />
        {error && <p>{error}</p>}
        <Form layout="inline" onSubmit={this.onSubmit}>
          <div>
            <Row type="flex" justify="center">
              <Col className="gutter-row" span={3}>
                <div className="gutter-box">
                  <Form.Item>
                    <Input
                      prefix={<Icon type="user" className="icon_transparent" />}
                      placeholder="author"
                      value={author}
                      onChange={this.onAuthorChange}
                    />
                  </Form.Item>
                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <div className="gutter-box">
                  <Form.Item>
                    {this.props.posts && (
                      <Select value={parent.id} onChange={this.onParentChange}>
                        {
                          this.props.posts.map((post) => (
                            <Option value={post.id} key={post.id}>{post.title}</Option>
                          ))
                        }
                      </Select>
                    )}
                  </Form.Item>

                </div>
              </Col>

              <Col className="gutter-row" span={6}>
                <Form.Item>
                <TextArea autosize={{ minRows: 1, maxRows: 1 }} placeholder="comment" value={body} onChange={this.onBodyChange}>
                </TextArea>
                </Form.Item>
              </Col>

              <Col className="gutter-row" span={6}>
                <Form.Item>
                  <Input
                    addonBefore={<Button size="small" onClick={this.upvote}>upvote</Button>}
                    addonAfter={<Button size="small" onClick={this.downvote}>downvote</Button>}
                    value={voteScore}
                    readOnly
                  />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={2}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Col>
            </Row>

          </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({posts}) => {
  return {posts}
};

export default connect(mapStateToProps)(CommentForm);