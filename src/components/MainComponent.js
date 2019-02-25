import React, { Component } from 'react';
import Home from './HomeComponent';
import Guide from './GuideComponent';
import Entry from './EntryComponent';
import Stats from './StatsComponent';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer } />     
    })
});

const GuideNavigator = createStackNavigator({
    Guide: { screen: Guide }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer } />  
    })
});

const EntryNavigator = createStackNavigator({
    Entry: { screen: Entry }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer } />  
    })
});

const StatsNavigator = createStackNavigator({
    Stats: { screen: Stats }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        color= 'white'
        onPress={ () => navigation.toggleDrawer } />  
    })
});



const MainNavigator = createDrawerNavigator({
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
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {

    static navigationOptions = {
        title: 'Main'
    };

    render() {
        return(
            <MainNavigator />
        );
    }
}

export default Main;