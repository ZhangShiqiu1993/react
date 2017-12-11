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

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Book
                            books={books}
                            bookshelf="currentlyReading"
                            shelfTitle="Currently Reading"
                            moveBook={onMoveBook}/>

                        <Book
                            books={books}
                            bookshelf="wantToRead"
                            shelfTitle="Want to Read"
                            moveBook={onMoveBook}/>
                        <Book
                            books={books}
                            bookshelf="read"
                            shelfTitle="Read"
                            moveBook={onMoveBook}/>

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