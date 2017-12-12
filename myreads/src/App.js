import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        });
    }


    moveBook = (book, next) => {
        if (next === 'none') {
            BooksAPI.update(book, next);
            this.setState((state) => ({
                books: state.books.filter((b) => b.id !== book.id)
            }));
            return
        }
        BooksAPI.update(book, next);
        book.shelf = next;
        this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id).concat([book])
        }))
    };

    render() {
        const {books} = this.state;

        return (
            <div className="app">
                <Route exact path="/" render={() =>(
                    <ListBooks
                        books={books}
                        onMoveBook={this.moveBook}
                    /> )}
                />

                <Route path="/search" render={({history}) =>(
                    <SearchBooks
                        onAddBook={(book, next) => {
                            this.moveBook(book, next);
                            // history.push('/');
                        }}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp
