import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from "./BooksAPI";
import {Link} from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    query: "",
    search: []
  }

  static propsType = {
    onAddBook : PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
  }

  updateQuery = (query) => {
    BooksAPI.search(query).then((result) => {
      (typeof result === 'undefined' || result.hasOwnProperty("error")) ?
        this.setState({query: "", search: []}) :
        this.setState({query: query.trim(), search: result.map((b) => {
            b.shelf = this.props.books[b.id] ? this.props.books[b.id] : "none";
            return b;
        })})
    });
  }

  addBook = (book, shelf) => {
    this.props.onAddBook(book, shelf);
    this.setState((state) => ({
      search: state.search.map((b) => {
        if (b.id === book.id) {
          book.shelf = shelf
        }
        return b;
      })
    }));
  }


  render() {
    const {query, search} = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              autoFocus
              debounceTimeout={200}
              minLength={1}
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <Book books={search} moveBook={this.addBook}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks;