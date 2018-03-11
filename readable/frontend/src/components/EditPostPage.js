import React, {Component} from 'react';
import {connect} from 'react-redux';


class EditPostPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Edit Post Post</h1>
        <p>post id: {this.props.post.id}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditPostPage);