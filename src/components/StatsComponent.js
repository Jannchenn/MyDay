import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../config';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line } from 'react-native-svg'


let ref = db.ref('/chart');

type State = {
  moods: any
}

class Stats extends Component {
	constructor(props) {
		super(props);
		// Assign state itself, and a default value for items
		this.state = {
			moods: [],
      scores: []
		};
	}

    componentDidMount() {
      ref.on('value', snapshot => {
      	var anger = snapshot.child("Anger").val()
      	var anxiety = snapshot.child("Anxiety").val()
      	var calmness = snapshot.child("Calmness").val()
      	var depression = snapshot.child("Depression").val()
      	var happiness = snapshot.child("Happiness").val()
      	var motivation = snapshot.child("Motivation").val()
      	var moods = [anger, anxiety, calmness, depression, happiness, motivation]
      	var total = 0
      	for (var i = 0; i < moods.length; i++) {
      		total += moods[i]
      	}

      	anger = anger/total
      	anxiety = anxiety/total
      	calmness = calmness/total
      	depression = depression/total
      	happiness = happiness/total
      	motivation = motivation/total

        mood_avg = [anger, anxiety, calmness, depression, happiness, motivation]
      	scores = [
      		{"number": anger, "name": "Anger" },
      		{"number": anxiety, "name": "Anxiety" },
      		{"number": calmness, "name": "Calmness" },
      		{"number": depression, "name": "Depression" },
      		{"number": happiness, "name": "Happiness" },
      		{"number": motivation, "name": "Motivation" },
      	]
        this.setState({ moods: mood_avg });
        this.setState({ scores: scores });
      })
    }

    static navigationOptions = {
        title: 'Stats'
    };

   render() {
 
        const data = this.state.moods
        const colors = ['#D81616', '#F5911F', '#2C1FF5', '#606061', '#8658DC', '#1FCE34']

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: colors[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

        
 
        return (
        	<View style={styles.container}>
          <Text style={styles.chart_title}> Mood Averages </Text>
            <PieChart
                style={ { height: 200 } }
                data={ pieData }
            />
           <Text style={styles.anger}> Anger</Text>
           <Text style={styles.anxiety}> Anxiety</Text>
           <Text style={styles.calmness}> Calmness</Text>
           <Text style={styles.depression}> Depression</Text>
           <Text style={styles.happiness}> Happiness</Text>
           <Text style={styles.motivation}> Motivation</Text>
           </View>
        )
    }
 

}

const styles = {
  container: {
    backgroundColor:'whitesmoke',
    marginTop: 21,
  },
  chart_title : {
    paddingTop: 15,
    textAlign: 'center',
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 20,
    backgroundColor:'white',
    color: 'grey',
    fontWeight:'bold',
  },
  anger: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D81616'
  },
  anxiety: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F5911F'
  },
  calmness: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C1FF5'
  },
  depression: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#606061'
  },
  happiness: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8658DC'
  },
  motivation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1FCE34'
  }
}

export default Stats;