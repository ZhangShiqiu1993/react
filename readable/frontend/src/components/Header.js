import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Header extends Component {
  render() {
    return (
      <header>
        <h1>Readable</h1>
        <NavLink exact={true} to="/" activeClassName="is-active">Dashboard </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Post </NavLink>
        {this.props.categories && this.props.categories.map((category) => (
          <NavLink
            to={`/${category.path}`}
            key={category.name}
            activeClassName="is-active"
          >
            {category.name}
          </NavLink>
        ))}
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
};

export default connect(mapStateToProps)(Header);