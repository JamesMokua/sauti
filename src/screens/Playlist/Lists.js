import React, { useState } from 'react'
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ScrollView,
	Dimensions,
	TouchableOpacity
} from 'react-native'
import { useSelector } from 'react-redux'

import Item from './Item'
import Title from './Title'

import { Colors } from 'constants'

const { width } = Dimensions.get('window'),
	padding = 40

export default function Lists() {
	const { items } = useSelector(state => state.Playlist)
	const [index, setIndex] = useState(0)

	const _onPressTabButton = async key => {
		setIndex(key)
	}

	const Songs = () => {
		if (!items.length) return null

		const { id, sounds } = items[index]

		return (
			<View style={styles.scene}>
				<FlatList
					data={sounds}
					keyExtractor={({ id }) => id}
					renderItem={({ item }) => <Item playlistId={id} {...item} />}
				/>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			
			<View style={styles.tabBarContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.tabBar}>
						{items.map(({ title }, key) => {
							const isActive = key === index

							return (
								<TouchableOpacity
									key={key}
									onPress={_onPressTabButton.bind(this, key)}
								>
									<Text
										style={{
											fontSize: isActive ? 16 : 14,
											color: isActive ? Colors.primary : Colors.white,
											paddingRight: 20
										}}
									>
										{title}
									</Text>
								</TouchableOpacity>
							)
						})}
					</View>
				</ScrollView>
			</View>

			<View style={styles.sceneContainer}>{Songs()}</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 50
	},
	scene: {
		width: width - padding,
		flex: 1,
		backgroundColor: Colors.playerBG,
		marginHorizontal: padding / 2
	},
	tabBar: {
		flexDirection: 'row',
		paddingHorizontal: padding / 2,
		alignItems: 'center',
		height: 30
	},
	tabBarContainer: {
		height: 80,
		backgroundColor: Colors.layoutBG
	},
	sceneContainer: {
		top: -50,
		flex: 1
	}
})
