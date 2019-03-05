import React, { Component } from 'react';
import Home from './HomeComponent';
import Guide from './GuideComponent';
import Entry from './EntryComponent';
import Stats from './StatsComponent';
import { StyleSheet, ImageBackground, Button, View, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator, createAppContainer,StackActions,NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';


class Welcome extends Component {  
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
                    <Button 
                        onPress={() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                  NavigationActions.navigate({ routeName: 'MainNavigator' })
                                ],
                              }))    
                        }}
                        title="START"
                        color="#ffffff"
                    />
    			</View>
    		</View>

    	</ImageBackground>
    );
  }
}

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



const MainNavigator = createDrawerNavigator({
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
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});

const AppContainer = createAppContainer(MainNavigator);

class Main extends Component {

    static navigationOptions = {
        title: 'Main'
    };

    render() {
        return(
            <AppContainer />
        );
    }
}

export default Main;

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