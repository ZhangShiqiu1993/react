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
    timestamp: this.props ? moment(this.props.timestamp): moment(),
    error: ''
  };


  onSubmit = (e) => {
    e.preventDefault();
    const {title, author, body, category, deleted, voteScore, timestamp} = this.state;
    if (!title || !author || !body || !category) {
      this.setState({error: "Please provide title, body, author and category"});
    } else {
      this.setState({error: ""});
      this.props.onSubmit({
        author, body, title, category, deleted, voteScore,
        timestamp: timestamp.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className="create-contact-form">
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm;