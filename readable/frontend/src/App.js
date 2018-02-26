import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostDashboardPage from './components/PostDashboardPage';
import EditPostPage from './components/EditPostPage';
import AddPostPage from './components/AddPostPage';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact={true} path="/" component={PostDashboardPage} />
              <Route path="/create" component={AddPostPage} />
              <Route path="/edit/:id" component={EditPostPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;