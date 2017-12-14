import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from "./BooksAPI";
import {Link} from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

class SearchBooks extends Component {
    state = {
        query: "",
        search: []
    }

    static propsType = {
        onAddBook : PropTypes.func.isRequired
    }

    updateQuery = (query) => {
        BooksAPI.search(query).then((result) => {
            (typeof result === 'undefined' || result.hasOwnProperty("error")) ?
                this.setState({query: "", search: []}) :
                this.setState({query: query.trim(), search: result})
        });
    }

    addBook = (book, shelf) => {
        this.props.onAddBook(book, shelf);
        this.setState((state) => ({
            search: state.search.filter((b) => b.id !== book.id)
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
                    <ol className="books-grid">
                        {search.length !== 0 && search.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        {book.hasOwnProperty("imageLinks") && (
                                            <div className="book-cover" style={{ width: 128, height: 180, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        )}
                                        <div className="book-shelf-changer">
                                            <select onChange={(e) => this.addBook(book, e.target.value)} value="none">
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.hasOwnProperty("authors") ? book.authors.join(", ") : ""}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;