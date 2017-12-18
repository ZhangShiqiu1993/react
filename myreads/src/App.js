import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from "./SearchBooks";
import NoMatch from "./NoMatch"

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
    BooksAPI.update(book, next);
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }));
    if (next !== 'none') {
      book.shelf = next;
      this.setState((state) => ({
        books: state.books.concat([book])
      }))
    }
  };

  render() {
    const {books} = this.state;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() =>(
            <ListBooks
              books={books}
              onMoveBook={this.moveBook}
            /> )}
          />

          <Route path="/search" render={() =>(
            <SearchBooks
              books={books.reduce((d, curt) => {
                d[curt.id] = curt.shelf;
                return d;
              }, {})}
              onAddBook={this.moveBook}
            />
          )} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
