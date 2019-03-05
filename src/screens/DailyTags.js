import React, { Component } from 'react';
import {
        View,
        Text,
} from 'react-native';
import MultipleTags from 'react-native-multiple-tags';
 
 
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
    key: 'id_01',
    value: 'anxious',
  },
  {
    key: 'id_02',
    value: 'insecure',
  },
  {
    key: 'id_03',
    value: 'uncomfortable',
  },
  {
    key: 'id_04',
    value: 'stressed'
  },
  {
    key: 'id_05',
    value: 'depressed'
  },
  {
    key: 'id_06',
    value: 'grieving'
  },
  {
    key: 'id_07',
    value: 'lonely'
  },
  {
    key: 'id_08',
    value: 'lost'
  },
  {
    key: 'id_09',
    value: 'worthless'
  }
]
 
 

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      contentx: [],
    };
  }
 
  render() {
    return (
      <View>
        <MultipleTags
          tags={tags}
          search
          onChangeItem={(contentx) => { this.setState({ contentx }); }}
          title="Feelings"
        />
        {
        (() => this.state.contentx.map(item => <Text key={item}> {item} </Text>) )()
        }
      </View>
    );
  }
}
 
export default WelcomeComponent;     