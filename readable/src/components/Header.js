import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Breadcrumb, Icon } from 'antd';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Readable</h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink exact={true} to="/" activeClassName="is-active">
              <Icon type="home"/>
              Dashboard
            </NavLink>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <NavLink to="/create" activeClassName="is-active">
              <Icon type="form" />
              Create Post
            </NavLink>
          </Breadcrumb.Item>

          {this.props.categories && this.props.categories.map((category) => (
            <Breadcrumb.Item key={category.name}>
              <NavLink
                to={`/${category.path}`}
                key={category.name}
                activeClassName="is-active"
              >
                <Icon type="tags" />
                {category.name}
              </NavLink>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
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