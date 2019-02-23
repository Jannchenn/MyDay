import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Guide extends Component {

    static navigationOptions = {
        title: 'Guide'
    };

    render() {
        return(
            <View><Text>Guide Component</Text></View>
        );
    }
}

export default Guide;