import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';
import DailySummaryComponent from '../screens/DailySummaryComponent';

// let thoughtRef = db.ref('/thought');
// let tagsRef = db.ref('/tag');

var d = "";

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    constructor(props) {
        super(props);
        this.d = "";
    }

    render() {
        return(
            <View>
                <CalendarList
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={true}
                    // Set custom calendarWidth.
                    calendarWidth={Dimensions.get('window').width}
                    maxDate = {new Date()}
                    hideArrows={false}
                    onDayPress={(day)=>{this.d = "ddd"}}
                />
                <DailySummaryComponent day="kkk"/>
            </View>
        );
    }
}


export default Home;