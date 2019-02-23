import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Entry extends Component {

    static navigationOptions = {
        title: 'Add'
    };

    render() {
        return(
            <View><Text>Entry Component</Text></View>
        );
    }
}

export default Entry;