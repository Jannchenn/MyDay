import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from '../config';
import Home from '../components/HomeComponent';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const defaultAnswers = { question1: 'nothing', question2: 'nothing', question3: 'nothing', question4: 'nothing', question5: 'nothing', question6: 'nothing', question7: 'nothing', question8: 'nothing'};

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
        db.ref('/survey').push(answers);

        cat1 = answers.question1.category;
        db.ref('/chart').push(cat1);
        for (let i = 0; i < cat1.length; ++i) {
            var path = '/chart/' + cat1[i];
            db.ref(path).set(10)
            //db.ref(path).set(answers.question1.value);
        }

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
