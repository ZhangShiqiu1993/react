import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from "./Book";
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: true,
        query: ""
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        });
    }

    updateQuery = (query) => {
        this.setState({query : query.trim()})
    };

    clearQuery = () => {
        this.setState({query: ""})
    };


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
        const {books, showSearchPage, query} = this.state;

        let showingBooks;
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');
            showingBooks = books.filter((book) => {
                console.log(book.title)
                if (match.test(book.title)) {
                    return true;
                }
                for (let author of book.authors) {
                    console.log(author)
                    if (match.test(author)) {
                        return true;
                    }
                }
                return false;
            });
        } else {
            showingBooks = books;
        }

        showingBooks.sort(sortBy('title'));

        return (
            <div className="app">
                {/*{showSearchPage ? (*/}
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                            <div className="search-books-input-wrapper">
                                <input
                                    type="text"
                                    placeholder="Search by title or author"
                                    value={query}
                                    onChange={(event) => this.updateQuery(event.target.value)}
                                />

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                // ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Book
                                    books={showingBooks}
                                    bookshelf="currentlyReading"
                                    shelfTitle="Currently Reading"
                                    moveBook={this.move}/>

                                <Book
                                    books={showingBooks}
                                    bookshelf="wantToRead"
                                    shelfTitle="Want to Read"
                                    moveBook={this.move}/>
                                <Book
                                    books={showingBooks}
                                    bookshelf="read"
                                    shelfTitle="Read"
                                    moveBook={this.move}/>

                            </div>
                        </div>
                        <div className="open-search">
                            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                        </div>
                    </div>
                // )}
            </div>
        )
    }
}

export default BooksApp
