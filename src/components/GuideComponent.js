import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../config';
import FoodComponent from './FoodComponent';

let foodRef = db.ref('/food');

class Guide extends Component {

    state = {
        food: []
      };
    
      componentDidMount() {
        foodRef.on('value', snapshot => {
          let data = snapshot.val();
          let food = Object.values(data);
          this.setState({ food });
        });
      }

    static navigationOptions = {
        title: 'Guide'
    };

    render() {
        // return(
        //     <View><Text>Guide Component</Text></View>
        // );
        return (
            <View style={styles.container}>
              {this.state.food.length > 0 ? (
                <FoodComponent items={this.state.food} />
              ) : (
                <Text>No items</Text>
              )}
            </View>
          );
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    }
});

export default Guide;