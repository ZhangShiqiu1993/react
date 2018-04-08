import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {downVotePost, upVotePost} from "../actions/posts";

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
        amount: parseInt(this.state.voteScore),
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
  // onVoteScoreChange = (e) => {
  //   const voteScore = e.target.value;
  //   if (!voteScore || voteScore.match(/^\d+$/)){
  //     this.setState({voteScore});
  //   }
  // };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({title});
  };

  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState({author});
  };

  onCategoryChange = (e) => {
    const category = e.target.value;
    this.setState({category});
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState({body});
  };

  onTimeStampChange = (e) => {
    const timestamp = e.target.value;
    if (!timestamp || timestamp.match(/^\d+$/)){
      this.setState({timestamp});
    }
  };

  render() {
    const {title, author, body, category, voteScore, timestamp, error} = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit} className="create-contact-form">
          <div className="create-contact-details">
            <p>
              title
              <input type="text" placeholder='title' autoFocus value={title} onChange={this.onTitleChange}/>
            </p>

            <p>
              author
              <input type="text" placeholder='author' value={author} onChange={this.onAuthorChange}/>
            </p>

            <p>
              category
              {this.props.categories && (
                <select value={category} onChange={this.onCategoryChange}>
                  {
                    this.props.categories.map((c) => (
                      <option value={c.name} key={c.name}>{c.name}</option>
                    ))
                  }
                </select>
              )}
            </p>

            <p>
            body
            <textarea placeholder="post body" value={body} onChange={this.onBodyChange}>
            </textarea>
            </p>

            <p>
              voteScore: {voteScore}
              <button onClick={this.upvote}>upvote</button>
              <button onClick={this.downvote}>downvote</button>
            </p>


            <button>Submit</button>
          </div>
        </form>
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