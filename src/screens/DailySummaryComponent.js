import React, { Component } from 'react';  
import { View, Text, StyleSheet } from 'react-native';  
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
function Welcome(props) {
    return <Text>Hello, {props.name}</Text>;
}
class DailySummaryComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <ScrollView>
                <Welcome name="kmkmk"/>
            </ScrollView>
        );
    }
}

export default Welcome;
