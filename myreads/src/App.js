import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: false
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        });
    }

    render() {
      const {books, showSearchPage} = this.state;
      let currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
      let wantToRead = books.filter((book) => book.shelf === "wantToRead");
      let read = books.filter((book) => book.shelf === "read");

        return (
            <div className="app">
                {showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                            <div className="search-books-input-wrapper">
                                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                <input type="text" placeholder="Search by title or author"/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {currentlyReading.map((book) => (
                                                <li key={book.id}>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 180, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>
                                                        <div className="book-authors">{book.authors[0]}</div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {wantToRead.map((book) => (
                                                <li key={book.id}>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 180, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>
                                                        <div className="book-authors">{book.authors[0]}</div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {read.map((book) => (
                                                <li key={book.id}>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 180, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select>
                                                                    <option value="none" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>
                                                        <div className="book-authors">{book.authors[0]}</div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
