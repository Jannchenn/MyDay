import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View, Alert } from "react-native";
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

export default class Health extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0
  };

  addItem = (item) => { 
    todayDate = makeTodayDate();   
    db.ref('/fit').update({
      [todayDate]: {
        "step": this.state.pastStepCount,
        "exercise": item
      }
    });
  };

  handleSelect = (option) => {
    Alert.alert(
        'Success!',
        'Your exercise record for today has been updated',
        [
            {text: 'OK'}
        ]
    );
    this.addItem(option)
  }
  

  static navigationOptions = {
    title: 'Fit'
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Text>
          Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
        </Text>
        <Text style={{fontWeight: 'bold',fontSize: 15}}>
          Steps taken in the last 24 hours: {this.state.pastStepCount}
        </Text>
        <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
        <Text style={styles.titleText}>Exercise Entry:</Text>
        <Text style={{fontWeight: 'bold',fontSize: 15, marginTop: 10}}>Did you exercise today?</Text>
        <MultipleChoice style={{marginTop: 10}}
            options={[
            'Yes',
            'No'
            ]}
            selectedOptions={['No']}
            maxSelectedOptions={1}
            onSelection={this.handleSelect}
        />

      </View>
    );

    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 50,
    padding: 20
  },
  titleText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
});


