import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	Button,
	TouchableHighlight,
} from 'react-native';

export default class MenuItem extends React.Component {
	constructor(props){
    	super(props)
  	}
	render() {
		return (
			<View style={styles.menuItem} >
				<TouchableHighlight onPress={this.props.onPress}>
					<Image
						source={this.props.itemImage}
						style={styles.image} 
					/>
				</TouchableHighlight>
			</View>
		);
	}	
}

const styles = StyleSheet.create({
	menuItem: {
		width: '25%',
		height: '40%',
		padding: 10,
	},
	image: {
		width: '100%',
		height: '100%',
		opacity: .9,
		borderColor: '#fff',
		borderWidth: 3
	}
})