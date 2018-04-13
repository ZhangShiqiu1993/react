import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sorting} from "../actions/filters";
import { Select } from 'antd';
const Option = Select.Option;

class PostFilter extends Component {
  render() {
    return (
      <div>
        <span>sort by</span>
        <Select
          defaultValue={this.props.filter ? this.props.filter.field : 'timestamp'}
          className="select_width"
          onChange={(value) => {
            this.props.dispatch(sorting(value));
          }}
        >
          <Option value="timestamp">timestamp</Option>
          <Option value="voteScore">voteScore</Option>
        </Select>
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