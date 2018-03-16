import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';

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

  render() {
    const {title, author, body, category, deleted, voteScore, timestamp, error} = this.state;
    // console.log('form',!!this.props.categories);
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit} className="create-contact-form">
          <div className="create-contact-details">
            {/* deleted, voteScore, timestamp*/}

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