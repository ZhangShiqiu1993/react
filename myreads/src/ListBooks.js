import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from "./Shelf"

class ListBooks extends Component {
  static propTypes = {
    onMoveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const {onMoveBook, books} = this.props;
    let currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    let wantToRead = books.filter((book) => book.shelf === "wantToRead");
    let read = books.filter((book) => book.shelf === "read");
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={currentlyReading} moveBook={onMoveBook} title={"Currently Reading"}/>
            <Shelf books={wantToRead} moveBook={onMoveBook} title={"Want to Read"}/>
            <Shelf books={read} moveBook={onMoveBook} title={"Read"}/>
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search">
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks