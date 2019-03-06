import React, { Component } from 'react';
import Home from './HomeComponent';
import Guide from './GuideComponent';
import Entry from './EntryComponent';
import Stats from './StatsComponent';
import SurveyCompletedScreen from '../screens/SurveyCompletedScreen';
import SurveyScreen from '../screens/SurveyScreen';
import { StyleSheet, ImageBackground, Button, View, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';


const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />     
    })
});

const GuideNavigator = createStackNavigator({
    Guide: { screen: Guide }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const EntryNavigator = createStackNavigator({
    Entry: { screen: Entry }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const StatsNavigator = createStackNavigator({
    Stats: { screen: Stats }
  }, {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

const stackNav = createStackNavigator({
    Survey: {
        screen: SurveyScreen
    },
    SurveyCompleted: {
        screen: SurveyCompletedScreen
    },
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />  
    })
});

export default MainNavigator = createDrawerNavigator({
    // Start: 
    // { screen: StartNavigator},
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }
      },
    Entry: 
      { screen: EntryNavigator,
        navigationOptions: {
          title: 'Add',
          drawerLabel: 'Add',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='plus'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    Guide: 
      { screen: GuideNavigator,
        navigationOptions: {
          title: 'Guide',
          drawerLabel: 'Guide',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='book'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    Stats: 
      { screen: StatsNavigator,
        navigationOptions: {
          title: 'Report',
          drawerLabel: 'Report',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='archive'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        }, 
      },
    Survey: 
      { screen: stackNav,
        navigationOptions: {
          title: 'Survey',
          drawerLabel: 'Survey',
          drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'            
              size={24}
              color={tintColor}
            />
          ),
        },
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});

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
  	fontSize: 30,
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
    flexWrap: 'wrap',
  	justifyContent: 'center'
  }
});