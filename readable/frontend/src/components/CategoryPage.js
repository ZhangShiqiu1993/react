import React, {Component} from 'react';

class CategoryPage extends Component {
  render() {
    return (
      <div>
        <h3>Category</h3>
        <p>{this.props.match.params.category}</p>
      </div>
    )
  }
}

export default CategoryPage;