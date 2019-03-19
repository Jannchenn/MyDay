import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ListView, FlatList, SectionList } from 'react-native';
import { db } from '../config';
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line } from 'react-native-svg'
import { ScrollView } from 'react-native-gesture-handler';


let chartRef = db.ref('/chart');
let foodRef = db.ref('/food')

type State = {
  moods: any,
  food: any
}

class Stats extends Component {
  constructor(props) {
    super(props);
    // Assign state itself, and a default value for items
    this.state = {
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0,
      moods: [],
      scores: [],
      happiness: [],
      motivation: [],
      calmness: []
    };
  }

    componentDidMount() {
      chartRef.on('value', snapshot => {
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

        anger = parseInt(100*anger/total)
        anxiety = parseInt(100*anxiety/total)
        calmness = parseInt(100*calmness/total)
        depression = parseInt(100*depression/total)
        happiness = parseInt(100*happiness/total)
        motivation = parseInt(100*motivation/total)

        mood_avg = [anger, anxiety, calmness, depression, happiness, motivation]
        scores = [
          {"number": anger, "name": "Anger" },
          {"number": anxiety, "name": "Anxiety" },
          {"number": depression, "name": "Depression" }
        ]
        this.setState({ moods: mood_avg });
        this.setState({ scores: scores });
      })

      foodRef.once('value', snapshot => {
        var happiness_food = []
        var calmness_food = []
        var motivation_food = []
        snapshot.forEach(function(childSnapshot) {
          var categories = childSnapshot.child("/category").val()
          var food_name = childSnapshot.child("/name").val()
          for (var i in categories)
          {
            if (categories[i] == "Calmness")
            {
              calmness_food.push(food_name)
              calmness_food.push("\n")
            }

            if (categories[i] == "Happiness")
            {
              happiness_food.push(food_name)
              happiness_food.push("\n")
            }

            if (categories[i] == "Motivation")
            {
              motivation_food.push(food_name)
              motivation_food.push("\n")
            }
          }
        })
        this.setState({ happiness: happiness_food })
        this.setState({ calmness: calmness_food })
        this.setState({ motivation: motivation_food })
      })
    }

    static navigationOptions = {
        title: 'Stats'
    };

   render() {
        const { labelWidth, selectedSlice } = this.state;
        const { label, value } = selectedSlice;
        const keys = ['Anger', 'Anxiety', 'Calmness', 'Depression', 'Happiness', 'Motivation'];
        const values = this.state.moods
        const colors = ['#D81616', '#F5911F', '#2C1FF5', '#606061', '#8658DC', '#1FCE34']
        var obj = this.state.scores
        obj.sort((a,b) => a.number > b.number)
        const food = []
        for (i in obj)
        {
          if (obj[i].name == "Anger")
          {
            food.push(this.state.calmness)
            break
          }
          if (obj[i].name == "Anxiety")
          {
            food.push(this.state.motivation)
            break
          }
          if (obj[i].name == "Depression")
          {
            food.push(this.state.happiness)
            break
          }
        }

        const listFood = food.map((f) => <Text style={styles.display_Stats}> {f} </Text> )

        const data = keys.map((key, index) => {
         return {
            key,
            value: values[index],
            svg: { fill: colors[index] },
            arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
            onPress: () => this.setState({ selectedSlice: { label: key, value: values[index]} })
         }
        })

       const deviceWidth = Dimensions.get('window').width

        return (
        <ScrollView>
      <View style={styles.container}>
      <Text style={styles.chart_title}> Daily Mood Averages </Text>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text style={styles.display_Stats}>
          {`${label} \n ${value}`}
        </Text>
      </View>
      <View style={styles.container}>
      <Text style={styles.chart_title}> Food Recommendations </Text>
      { listFood } 
      </View>
      </ScrollView>
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
  display_Stats: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center' 
  },
  TextStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
}

export default Stats;