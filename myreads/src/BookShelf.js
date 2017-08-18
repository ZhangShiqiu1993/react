import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
class BookShelf extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired,
    books : PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map( (book) => (
              <li key={book.id} >
                <Book
                  imageUrl={book.imageLinks.thumbnail}
                  title={book.title}
                  authors={book.authors}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf