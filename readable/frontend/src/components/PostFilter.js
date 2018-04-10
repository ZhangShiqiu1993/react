import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sorting} from "../actions/filters";

class PostFilter extends Component {
  render() {
    return (
      <div>
        <select
          value={this.props.filter ? this.props.filter.field : 'timestamp'}
          onChange={(e) => {
            this.props.dispatch(sorting(e.target.value));
          }}
        >
          <option value="timestamp">timestamp</option>
          <option value="voteScore">voteScore</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
};

export default connect(mapStateToProps)(PostFilter);