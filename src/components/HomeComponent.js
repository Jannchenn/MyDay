import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Welcome from '../screens/DailySummaryComponent';
import AgendaView from '../react-native-calendars-master/src/agenda/index'

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
        this.state = {};
        this.onDayPress = this.onDayPress.bind(this);
    }

    render() {
        return(
                <AgendaView
                    
                />
                
        );
    }
    onDayPress(day) {
        this.setState({
          selected: day.dateString
        });
      }
}


export default Home;