import React, {Component} from 'react';
import moment from 'moment';

class PostForm extends Component {
  state = {
    author: this.props ? this.props.author: '',
    body: this.props ? this.props.body: '',
    category: this.props ? this.props.category: '',
    deleted: this.props ? this.props.deleted: false,
    title: this.props ? this.props.title: '',
    voteScore: this.props ? this.props.voteScore: 0,
    timestamp: this.props ? moment(this.props.timestamp): moment()
  };


  render() {
    return (
      <div>
        <h1>PostForm</h1>
      </div>
    );
  }
}

export default PostForm;