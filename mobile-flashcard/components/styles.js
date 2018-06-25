import {StyleSheet} from "react-native";
import {lightPurp, white} from "../utils/colors";

export const styles = StyleSheet.create({
	iosBtn: {
		backgroundColor: lightPurp,
		margin: 10,
		padding: 0,
		borderRadius: 20,
		height: 30,
		marginLeft: 80,
		marginRight: 80,
	},
	AndroidBtn: {
		backgroundColor: lightPurp,
		padding: 0,
		margin: 10,
		paddingLeft: 80,
		paddingRight: 80,
		height: 35,
		borderRadius: 15,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		color: white,
		fontSize: 20,
		textAlign: 'center',
	},
	textInput: {
		height: 40,
		margin: 10,
		padding: 10,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 15
	},
	display: {
		paddingTop:10,
		paddingHorizontal: 15,
		paddingVertical: 25,
		marginLeft:10,
		marginRight:10,
		alignItems:'center',
		justifyContent: 'center'
	},
	showAnswer: {
		color: 'red',
		fontSize: 20
	},
	text: {
		fontSize: 30,
		textAlign:'center'
	},
	card: {
		fontSize: 20,
		marginLeft:10,
		marginRight:10,
		textAlign:'center'
	},
	inputText: {
		fontSize: 20,
		textAlign:'left',
		marginLeft: 10,
		marginRight: 10
	},
	reminder: {
		fontSize:15,
		textAlign:'left',
		margin: 5
	}
});