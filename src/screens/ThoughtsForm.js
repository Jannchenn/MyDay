import React, { Component } from 'react';  
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { db } from '../config';

let makeTodayDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = mm + '-' + dd + '-' + yyyy;
    return today;
  }

let addItem = (item) => { 
  todayDate = makeTodayDate();   
  db.ref('/thoughts').push({
    [todayDate]: item
  });
};

export default class ThoughtsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      value: e.nativeEvent.text
    });
  };

  handleSubmit = () => {   
    addItem(this.state.value);
  };

  render() {
    return (
      <View style={styles.thoughtsform}>
        <Text style={styles.header}>Thoughts</Text>
        <TextInput style={styles.textinput} placeholder="Enter your thoughts here" onChange={this.handleChange}/>
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thoughtsform: {
    alignSelf: 'center',
  },

  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom:30,
    borderBottomWidth: 1,
  },

  button: {
    alignSelf: 'stretch',
    alignItems:'center',
    padding:20,
    backgroundColor: '#59cbbd',
    marginTop:30,
  },

  btntext: {
    color:'#fff',
    fontWeight:'bold',
  },
});





