import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortByScore, sortByTime} from "../actions/filters";

class PostFilter extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <select
          value={this.props.filter ? this.props.filter.field : 'timestamp'}
          onChange={(e) => {
            if (e.target.value === 'timestamp') {
              this.props.dispatch(sortByTime());
            } else if (e.target.value === 'voteScore') {
              this.props.dispatch(sortByScore());
            }
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