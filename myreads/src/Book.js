import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  };

  render() {
    const {books, moveBook} = this.props;
    return (
      <ol className="books-grid">
        {books.length !== 0 && books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x180?text=No%20Cover"})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(e) => moveBook(book, e.target.value)} value={book.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
            </div>
          </li>
        ))}
      </ol>

    )
  }
}

export default Book;