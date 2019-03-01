import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <CalendarList
                // Enable horizontal scrolling, default = false
                horizontal={true}
                // Enable paging on horizontal, default = false
                pagingEnabled={true}
                // Set custom calendarWidth.
                calendarWidth={Dimensions.get('window').width}
                maxDate = {new Date()}
            />
        );
    }
}

export default Home;