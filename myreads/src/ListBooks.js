import React, {Component} from 'react';
import './App.css';
import Book from "./Book";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

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
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                            <Book
                                books={currentlyReading}
                                moveBook={onMoveBook}/>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <Book
                                    books={wantToRead}
                                    moveBook={onMoveBook}/>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Book
                                    books={read}
                                    moveBook={onMoveBook}/>
                            </div>
                        </div>

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