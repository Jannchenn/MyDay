import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Stats extends Component {

    static navigationOptions = {
        title: 'Stats'
    };

    render() {
        return(
            <View><Text>Stats Component</Text></View>
        );
    }
}

export default Stats;