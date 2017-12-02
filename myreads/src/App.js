import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from "./Book";

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


    move = (book, next) => {
        if (next === 'none') {
            return
        }
        BooksAPI.update(book, next);
        book.shelf = next;
        this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id).concat([book])
        }))
    };

    render() {
        const {books, showSearchPage} = this.state;

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
                                <Book
                                    books={books}
                                    bookshelf="currentlyReading"
                                    shelfTitle="Currently Reading"
                                    moveBook={this.move}/>

                                <Book
                                    books={books}
                                    bookshelf="wantToRead"
                                    shelfTitle="Want to Read"
                                    moveBook={this.move}/>
                                <Book
                                    books={books}
                                    bookshelf="read"
                                    shelfTitle="Read"
                                    moveBook={this.move}/>

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
