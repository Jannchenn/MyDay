import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from '../config';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const defaultAnswers = { question1: 'nothing', question2: 'nothing', question3: 'nothing', question4: 'nothing', question5: 'nothing', question6: 'nothing', question7: 'nothing', question8: 'nothing'};

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

let addItem = (item) => { 
    todayDate = makeTodayDate();   
    db.ref('/survey').update({
      [todayDate]: item
    });
  };

let surveyAdd = (answers) => {
    cat1 = answers.question1.category;
    console.log(cat1.length);
    for (let i = 0; i < cat1.length; ++i) {
        path = '/chart/' + cat1[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question1.value;
            }
            else {
                score = answers.question1.value;
            }
            return score;
        });
    }
    cat2 = answers.question2.category;
    console.log(cat2.length);
    for (let i = 0; i < cat2.length; ++i) {
        path = '/chart/' + cat2[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question2.value;
            }
            else {
                score = answers.question2.value;
            }
            return score;
        });
    }
    cat3 = answers.question3.category;
    console.log(cat3.length);
    for (let i = 0; i < cat3.length; ++i) {
        path = '/chart/' + cat3[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question3.value;
            }
            else {
                score = answers.question3.value;
            }
            return score;
        });
    }
    cat4 = answers.question4.category;
    console.log(cat4.length);
    for (let i = 0; i < cat4.length; ++i) {
        path = '/chart/' + cat4[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question4.value;
            }
            else {
                score = answers.question4.value;
            }
            return score;
        });
    }
    cat5 = answers.question5.category;
    console.log(cat5.length);
    for (let i = 0; i < cat5.length; ++i) {
        path = '/chart/' + cat5[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question5.value;
            }
            else {
                score = answers.question5.value;
            }
            return score;
        });
    }
    cat6 = answers.question6.category;
    console.log(cat6.length);
    for (let i = 0; i < cat6.length; ++i) {
        path = '/chart/' + cat6[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question6.value;
            }
            else {
                score = answers.question6.value;
            }
            return score;
        });
    }
    cat7 = answers.question7.category;
    console.log(cat7.length);
    for (let i = 0; i < cat7.length; ++i) {
        path = '/chart/' + cat7[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question7.value;
            }
            else {
                score = answers.question7.value;
            }
            return score;
        });
    }
    cat8 = answers.question8.category;
    console.log(cat8.length);
    for (let i = 0; i < cat8.length; ++i) {
        path = '/chart/' + cat8[i];
        console.log(path);
        db.ref(path).transaction(function(score) {
            if (score) {
                score = score + answers.question8.value;
            }
            else {
                score = answers.question8.value;
            }
            return score;
        });
    }
};

export default class SurveyCompletedScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey Results',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    render() {
        const answers = this.props.navigation.getParam('surveyAnswers', defaultAnswers);
        addItem(answers);
        surveyAdd(answers);

        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.questionText}>The results are in!</Text>
                    <Text style={styles.questionText}>Question 1: {answers.question1.optionText}</Text>
                    <Text style={styles.questionText}>Question 2: {answers.question2.optionText}</Text>
                    <Text style={styles.questionText}>Question 3: {answers.question3.optionText}</Text>
                    <Text style={styles.questionText}>Question 4: {answers.question4.optionText}</Text>
                    <Text style={styles.questionText}>Question 5: {answers.question5.optionText}</Text>
                    <Text style={styles.questionText}>Question 6: {answers.question6.optionText}</Text>
                    <Text style={styles.questionText}>Question 7: {answers.question7.optionText}</Text>
                    <Text style={styles.questionText}>Question 8: {answers.question8.optionText}</Text>
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('Home')}
                    title="Finish"
                    color="white"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PURPLE,
    },
    container: {
        minWidth: '70%',
        maxWidth: '90%',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 10,
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
});