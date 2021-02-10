import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Menu, Search } from '../Icons'
import { Colors } from 'constants'

export default function Header() {
	const onPressSearch = () => {}

	return (
		<View style={styles.container}>
			

			<TouchableWithoutFeedback onPress={onPressSearch}>
				<View style={styles.search}>
					
				</View>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = {
	container: {
		backgroundColor: Colors.layoutBG,
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingTop: 20,
		height: 100
	},

	search: {
		marginLeft: 'auto',
		padding: 15
	}
}
