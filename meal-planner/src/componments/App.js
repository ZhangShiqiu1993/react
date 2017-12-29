import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addRecipe, removeFromCalendar } from "../actions";

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

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

function mapStateToProps({food, calendar}) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
        return meals;
      }, {})
    })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)