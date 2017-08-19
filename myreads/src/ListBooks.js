import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'


class ListBooks extends Component {
  static propTypes = {
    books : PropTypes.array.isRequired,
  }


  render() {
    let {books} = this.state
    let currentlyReading, wantToRead, read
    currentlyReading = books.filter( (book) => book.shelf === "currentlyReading")
    wantToRead = books.filter( (book) => book.shelf === "wandToRead")
    read = books.filter( (book) => book.shelf === "read")

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title="Currently Reading" books={currentlyReading}/>
            <BookShelf title="Want to Read" books={wantToRead}/>
            <BookShelf title="Read" books={read}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/">Add a book</Link>
        </div>
      </div>
    )
  }

}

export default ListBooks