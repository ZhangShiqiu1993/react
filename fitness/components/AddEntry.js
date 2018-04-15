import React, {Component} from 'react'
import { View } from 'react-native'
import {getMetricMetaInfo} from "../utils/helpers"

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }

  increment = (metric) => {
    const {max, step} = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]:Math.min(max, count)
      }
    })
  }

  decrement = (metric) => {
    const {max, step} = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] - step

      return {
        ...state,
        [metric]:Math.max(0, count)
      }
    })
  }

  render() {
    return (
      <View>
        {getMetricMetaInfo('bike').getIcon()}
      </View>
    );
  }
}