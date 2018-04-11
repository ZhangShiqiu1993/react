import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import PostDashboardPage from './components/PostDashboardPage';
import EditPostPage from './components/EditPostPage';
import AddPostPage from './components/AddPostPage';
import EditCommentPage from './components/EditCommentPage';
import PostDetailPage from './components/PostDetailPage';
import CategoryPage from './components/CategoryPage';
import NotFoundPage from './components/NotFoundPage';
import { connect } from 'react-redux'
import {loadCategoriesIntoStore} from "./utils/category";
import {loadPostsIntoStore} from "./utils/post";

class App extends Component {

  componentWillMount() {
    this.props.loadPosts();
    this.props.loadCategories();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={PostDashboardPage} />
              <Route exact path="/create" component={AddPostPage} />
              <Route exact path="/posts/:id" component={EditPostPage} />
              <Route exact path="/comments/:id" component={EditCommentPage} />
              <Route exact path="/:category" component={CategoryPage} />
              <Route exact path="/:category/:post_id" component={PostDetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => loadCategoriesIntoStore(dispatch),
    loadPosts: () => loadPostsIntoStore(dispatch)
  }
};

export default connect(null, mapDispatchToProps)(App);