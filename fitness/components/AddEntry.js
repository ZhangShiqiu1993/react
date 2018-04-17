import React, {Component} from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import {getMetricMetaInfo, timeToString} from "../utils/helpers";
import MySlider from "./MySlider";
import MySteppers from "./MySteppers";
import DateHeader from './DateHeader';
import { Ionicons } from '@expo/vector-icons';
import TextButton from './TextButton';
import {submitEntry, removeEntry} from "../utils/api";

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress = {onPress}
    >
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  increment = (metric) => {
    const {max, step} = getMetricMetaInfo(metric);

    this.setState((state) => {
      const count = state[metric] + step;

      return {
        ...state,
        [metric]:Math.min(max, count)
      }
    })
  };

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step;

      return {
        ...state,
        [metric]:Math.max(0, count)
      }
    })
  };

  slide = (metric, value) => {
    this.setState({[metric]: value})
  };

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    // Update Redux
    this.setState(() => ({run: 0, bike: 0, swim: 0, sleep: 0, eat: 0}));

    // Navigate to home

    submitEntry({key, entry})

  //  clear local notification

  };

  reset = () => {
    const key = timeToString();

  //  update redux

  //  route to home

    removeEntry(key)
  };

  render() {
    const metaInfo = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name={'ios-happy-outline'}
            size={100}
          />
          <Text>
            You already logged your information for today
          </Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    }

    return (
      <View>
        <DateHeader date={(new Date().toLocaleDateString())}/>
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key}>
            {getIcon()}
            {type === 'slider'
              ? <MySlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              : <MySteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
            }
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit}/>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}