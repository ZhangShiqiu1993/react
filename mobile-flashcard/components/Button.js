import React, {Component} from 'react'
import {Text, TouchableOpacity, Platform} from 'react-native'
import {styles} from "./styles";

class Button extends Component{
	render() {
		return (
			<TouchableOpacity
				style={Platform.OS === 'ios' ? styles.iosBtn : styles.AndroidBtn}
				onPress={this.props.onPress}
			>
				<Text style={styles.btnText}>{this.props.text}</Text>
			</TouchableOpacity>
		)
	}
}

export default Button