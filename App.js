import React from 'react';
import Start from './src/components/StartComponent'
import Main from './src/components/MainComponent'
import { createAppNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <Start />
    );
  }
}
