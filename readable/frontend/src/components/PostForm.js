import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import { Form, Input, Icon, Select, Button} from 'antd';
const Option = Select.Option;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};

class PostForm extends Component {
  state = {
    author: this.props.post ? this.props.post.author: '',
    body: this.props.post ? this.props.post.body: '',
    category: this.props.post ? this.props.post.category: 'react',
    title: this.props.post ? this.props.post.title: '',
    voteScore: this.props.post ? this.props.post.voteScore: 0,
    timestamp: this.props.post ? moment(this.props.post.timestamp): moment(),
    error: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {title, author, body, category, voteScore, timestamp} = this.state;
    if (!title || !author || !body || !category) {
      this.setState({error: "Please provide title, body, author and category"});
    } else {
      this.setState({error: ""});
      this.props.onSubmit({
        author, body, title, category, voteScore,
        timestamp: timestamp.valueOf(),
      });
    }
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

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({title});
  };

  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState({author});
  };

  onCategoryChange = (category) => {
    this.setState({category});
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState({body});
  };

  render() {
    const {title, author, body, category, voteScore, error} = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <Form onSubmit={this.onSubmit}>
            <Form.Item
              {...formItemLayout}
              label="Title"
            >
              <Input
                type="text"
                placeholder='title'
                autoFocus
                value={title}
                onChange={this.onTitleChange}
                prefix={<Icon type="book" className="icon_transparent" />}
              />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="Author"
            >
              <Input
                type="text"
                placeholder='author'
                value={author}
                onChange={this.onAuthorChange}
                prefix={<Icon type="user" className="icon_transparent"/>}
              />
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label="Category"
            >
              {this.props.categories && (
                <Select value={category} onChange={this.onCategoryChange}>
                  {
                    this.props.categories.map((c) => (
                      <Option value={c.name} key={c.name}>{c.name}</Option>
                    ))
                  }
                </Select>
              )}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Body"
            >
              <TextArea
                autosize={{ minRows: 2, maxRows: 6 }}
                placeholder="post"
                value={body}
                onChange={this.onBodyChange}/>
            </Form.Item>

            <Form.Item
              {...formItemLayout}
              label={"voteScore"}
            >
              <Input
                addonBefore={<Button size="small" onClick={this.upvote}>upvote</Button>}
                addonAfter={<Button size="small" onClick={this.downvote}>downvote</Button>}
                value={voteScore}
                readOnly
              />
            </Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
};

export default connect(mapStateToProps)(PostForm);