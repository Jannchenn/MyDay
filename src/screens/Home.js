import React, { Component } from 'react';  
import { StyleSheet, ImageBackground, Button, View, Text } from 'react-native';

import MenuItem from '../components/MenuItem.js';
import AddItem from '../screens/AddItem';  
import List from '../screens/List';
import DailyTags from '../screens/DailyTags'
import ThoughtsForm from '../screens/ThoughtsForm'

export default class Home extends Component {  
  render() {
    return (
    	<ImageBackground
    		source={require('../images/background.jpg')}
    		style={styles.container}>

    		<View style={styles.overlayContainer}>

    			<View style={styles.top}>
    				<Text style={styles.header}>My Day</Text>
    			</View>

    			<View style={styles.menuContainer}>
    				<MenuItem itemImage={require('../images/calendar.png')} onPress={() => this.props.navigation.navigate('ThoughtsForm')}/>
    				<MenuItem itemImage={require('../images/home.png')} onPress={() => this.props.navigation.navigate('ThoughtsForm')} />
    				<MenuItem itemImage={require('../images/pie_chart.png')} onPress={() => this.props.navigation.navigate('DailyTags')} />
    				<MenuItem itemImage={require('../images/pencil.png')} onPress={() => this.props.navigation.navigate('ThoughtsForm')} />
    			</View>
    		</View>

    	</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({  
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
  },
  overlayContainer: {
  	flex:1,
  	backgroundColor: 'rgba(47,163,218, .3)'
  },
  top: {
  	height:'60%',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  header: {
  	color: '#fff',
  	fontSize: 28,
  	borderColor: '#fff',
  	borderWidth: 2,
  	padding: 20, 
  	paddingLeft: 40,
  	paddingRight: 40,
  	backgroundColor: 'rgba(255,255,255, .1)',
  },
  menuContainer: {
  	height: '40%',
  	flexDirection: 'row',
  	flexWrap: 'wrap'
  }
});



// <View>
//         <Text>Home Screen</Text>
//         <Button
//           title="Add an Item"
//           onPress={() => this.props.navigation.navigate('AddItem')}
//         />
//         <Button
//           title="List of Items"
//           color="green"
//           onPress={() => this.props.navigation.navigate('List')}
//         />
//         <Button
// 	      	title="Enter Tags"
//           onPress={() => this.props.navigation.navigate('DailyTags')}
//         />
//         <Button
//         	title="Enter Thoughts"
//         	onPress={() => this.props.navigation.navigate('ThoughtsForm')}
//         />