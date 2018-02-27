import React, {Component} from 'react';

class EditPostPage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Edit Post Post</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    )
  }
}

export default EditPostPage;