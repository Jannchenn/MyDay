import React, { Component } from 'react';
import {
        View,
        Text,
        StyleSheet,
        Button,
        ScrollView
} from 'react-native';
import TagComponent from '../components/TagComponent.js';
 
const tags = [
  'anxious',
  'insecure',
  'uncomfortable',
  'stressed',
  'depressed',
  'grieving',
  'lonely',
  'lost',
  'worthless',
  'angry',
  'bitter',
  'irritated',
  'resentful',
  'happy',
  'hopeful',
  'proud',
  'thankful',
  'comfortable',
  'peaceful',
  'relieved',
  'satisfied',
  'determined',
  'energetic',
  'inspired',
  'motivated',
];
 
const objectTags = [
  {
    key: 'Anxiousness',
    value: ['anxious', 'insecure', 'uncomfortable', 'stressed']
  },
  {
    key: 'Depression',
    value: ['depressed', 'grieving', 'lonely', 'lost', 'worthless']
  },
  {
    key: 'Anger',
    value: ['angry', 'bitter', 'irritated', 'resentful'],
  },
  {
    key: 'Happiness',
    value: ['happy', 'hopeful', 'proud', 'thankful']
  },
  {
    key: 'Calmness',
    value: ['comfortable', 'peaceful', 'relieved', 'satisfied']
  },
  {
    key: 'Motivated',
    value: ['determined', 'energetic', 'inspired', 'motivated']
  },
]

class DailyTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      contentx: [],
    };
  }
 
  render() {
    return (
      <ScrollView style={styles.overlayContainer}>

        <View style={styles.tagContainer}>
          <TagComponent itemText="anxious" />
          <TagComponent itemText="insecure" />
          <TagComponent itemText="uncomfortable" />
          <TagComponent itemText="depressed" />
          <TagComponent itemText="grieving" />
          <TagComponent itemText="lonely" />
          <TagComponent itemText="lost" />
          <TagComponent itemText="worthless" />
          <TagComponent itemText="angry" />
          <TagComponent itemText="bitter" />
          <TagComponent itemText="irritated" />
          <TagComponent itemText="resentful" />
          <TagComponent itemText="happy" />

          <TagComponent itemText="hopeful" />
          <TagComponent itemText="proud" />
          <TagComponent itemText="thankful" />
          <TagComponent itemText="comfortable" />
          <TagComponent itemText="peaceful" />
          <TagComponent itemText="relieved" />
          <TagComponent itemText="satisfied" />
          <TagComponent itemText="determined" />
          <TagComponent itemText="energetic" />
          <TagComponent itemText="inspired" />
          <TagComponent itemText="motivated" />
        </View>

        <Button title="Submit" color="#841584" style={{height:'95%'}}/>
      </ScrollView>
    );
  }
}
 
export default DailyTags;

const styles = StyleSheet.create({  
  overlayContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  top: {
    height:'20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20, 
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFD712',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});





