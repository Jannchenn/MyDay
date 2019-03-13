import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';
import MultipleChoice from 'rn-multiple-choice';
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

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

const Weather = ({ weather, temperature }) => {
  addItem = (item) => { 
    todayDate = makeTodayDate();   
    db.ref('/weather').update({
      [todayDate]: {
        "temperature": temperature,
        "weather": weatherConditions[weather].title,
        "mood": item
      }
    });
  };

handleSelect = (option) => {
    Alert.alert(
        'Success!',
        'Your weather record for today has been updated',
        [
            {text: 'OK'}
        ]
    );
    this.addItem(option)
  }

  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
        <Text style={styles.tempText}>{temperature}˚C</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>How did the weather affect your mood today?</Text>
          <MultipleChoice style={{marginTop: 10}}
              optionStyle={{backgroundColor: '#fff'}}
              options={[
              'Positively',
              'Negatively',
              'No affect'
              ]}
              selectedOptions={['No affect']}
              maxSelectedOptions={1}
              onSelection={this.handleSelect}
          />
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  questionContainer: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  question: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }
});

export default Weather;