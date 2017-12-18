import React, { Component } from 'react';
import Book from "./Book";
import PropTypes from 'prop-types';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const {books, moveBook, title} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <Book
            books={books}
            moveBook={moveBook}/>
        </div>
      </div>
    )
  }
}

export default Shelf;