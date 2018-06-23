import React, {Component} from 'react'
import {Text, TouchableOpacity, Platform, StyleSheet} from 'react-native'
import {purple, white} from "../utils/colors";

class SubmitBtn extends Component{
	render() {
		return (
			<TouchableOpacity
				style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
				onPress={this.props.onPress}
			>
				<Text style={styles.submitBtnText}>SUBMIT</Text>
			</TouchableOpacity>
		)
	}
}


const styles = StyleSheet.create({
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40,
	},
	AndroidSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 2,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center',
	},
});


export default SubmitBtn