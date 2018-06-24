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
		borderColor: 'gray',
		borderWidth: 1
	}
});