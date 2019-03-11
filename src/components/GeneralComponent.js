import React, { Component } from 'react';
import {View, StyleSheet, Button, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { db } from '../config';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  Name: t.String,
  Gender: t.String,
  Age: t.String,
  Height: t.String,
  Weight: t.String,
  Food_Preference: t.String,
  Food_Restriction: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    Name: {
      error: 'Name is required'
    },
    Gender: {
      error: 'Gender is required'
    },
    Age: {
      error: 'Age is required'
    },
    Height: {
        error: 'Height is required'
    },
    Weight: {
        error: 'Weight is required'
    },
    Food_Preference: {
        error: 'Please provide your food preference so that we can give better recommendations! Put None if you do not have any'
    },
    Food_Restriction: {
        error: 'Please provide your food restriction so that we can give better recommendations! Put None if you do not have any'
    }
  },
  stylesheet: formStyles,
};

export default class General extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    this.setState({ value: null })
    db.ref('/person').update({
        "info": value
      });
    Alert.alert(
        'Success!',
        'Submit Successful',
        [
          {text: 'OK'}
        ],
        {cancelable: false},
      );
  }

  static navigationOptions = {
    title: 'General Info'
  };
  
  render() {
    return (
      <KeyboardAwareScrollView style={styles.sv}>
          <View style={styles.container}>
            <Form 
            ref={c => this._form = c}
            type={User} 
            options={options}
            />
            <Button
            title="Submit"
            onPress={this.handleSubmit}
            />
          </View>
      </KeyboardAwareScrollView>
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
  sv:{
    backgroundColor: '#E6E6FA',
  }
});
