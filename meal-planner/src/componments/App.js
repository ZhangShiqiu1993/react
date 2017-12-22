import React, { Component } from 'react'
import {connect} from 'react-redux'
class App extends Component {

  render() {
    console.log('Props', this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default connect()(App)