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


    move(bookId, current, next) {
        if (current === next || next === 'none') {
            return
        }
        let books = this.state.books;
        console.log(books)
        for (let book of this.state.books) {
            console.log(book)
            if (book.id === bookId) {
                console.log(1)
                BooksAPI.update(book, next);
                console.log(2)
                book.shelf = next;
                console.log(3)
                this.setState(state => ({
                    books: state.books.filter((b) => b.id !== bookId).contact([book])
                }))
                break
            }
        }
    }

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
                                    shelfTitle="Currently Reading"/>

                                <Book
                                    books={books}
                                    bookshelf="wantToRead"
                                    shelfTitle="Want to Read"/>
                                <Book
                                    books={books}
                                    bookshelf="read"
                                    shelfTitle="Read"/>

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
