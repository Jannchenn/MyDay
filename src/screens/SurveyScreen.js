import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { SimpleSurvey } from 'react-native-simple-survey';
import { COLORS } from '../res/validColors';

const GREEN = 'rgba(141,196,63,1)';
const PURPLE = 'rgba(108,48,237,1)';

const survey = [
    {
        questionType: 'Info',
        questionText: 'Welcome to the MyDay survey! Tap next to continue'
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Trouble falling or staying asleep or sleeping too much',
        questionId: 'question1',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Poor appetite or overeating',
        questionId: 'question2',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Little interest or pleasure in doing things',
        questionId: 'question3',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Trouble concentrating on things',
        questionId: 'question4',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Feeling nervous, anxious, or on edge',
        questionId: 'question5',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Not being able to stop or control worrying',
        questionId: 'question6',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Feeling down, depressed or hopeless',
        questionId: 'question7',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'SelectionGroup',
        questionText:
            'Have your problems interfered with your work, family, or social activities',
        questionId: 'question8',
        options: [
            {
                optionText: 'Not at all',
                value: '1'
            },
            {
                optionText: 'Several days',
                value: '2'
            },
            {
                optionText: 'More than half the days',
                value: '3'
            },
            {
                optionText: 'Nearly every day',
                value: '4'
            }
        ]
    },
    {
        questionType: 'Info',
        questionText: 'That is all for the survey, tap finish to see your results!'
    },
];

export default class SurveyScreen extends Component {
    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: GREEN,
                height: 40,
                elevation: 5,
            },
            headerTintColor: '#fff',
            headerTitle: 'Survey',
            headerTitleStyle: {
                flex: 1,
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = { backgroundColor: PURPLE };
    }

    onSurveyFinished(answers) {
        const infoQuestionsRemoved = [...answers];

        // Convert from an array to a proper object. This won't work if you have duplicate questionIds
        const answersAsObj = {};
        for (const elem of infoQuestionsRemoved) { answersAsObj[elem.questionId] = elem.value; }

        this.props.navigation.navigate('SurveyCompleted', { surveyAnswers: answersAsObj });
    }

    onAnswerSubmitted(answer) {
        switch (answer.questionId) {
            default:
                break;
        }
    }

    renderPreviousButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Previous'}
                />
            </View>
        );
    }

    renderNextButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    color={GREEN}
                    onPress={onPress}
                    disabled={!enabled}
                    backgroundColor={GREEN}
                    title={'Next'}
                />
            </View>
        );
    }

    renderFinishedButton(onPress, enabled) {
        return (
            <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
                <Button
                    title={'Finished'}
                    onPress={onPress}
                    disabled={!enabled}
                    color={GREEN}
                />
            </View>
        );
    }

    renderButton(data, index, isSelected, onPress) {
        return (
            <View
                key={`selection_button_view_${index}`}
                style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}
            >
                <Button
                    title={data.optionText}
                    onPress={onPress}
                    color={isSelected ? GREEN : PURPLE}
                    key={`button_${index}`}
                />
            </View>
        );
    }

    renderQuestionText(questionText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text numLines={1} style={styles.questionText}>{questionText}</Text>
            </View>
        );
    }

    renderInfoText(infoText) {
        return (
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={styles.infoText}>{infoText}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={[styles.background, { backgroundColor: this.state.backgroundColor }]}>
                <View style={styles.container}>
                    <SimpleSurvey
                        survey={survey}
                        renderSelector={this.renderButton.bind(this)}
                        containerStyle={styles.surveyContainer}
                        selectionGroupContainerStyle={styles.selectionGroupContainer}
                        navButtonContainerStyle={{ flexDirection: 'row', justifyContent: 'space-around' }}
                        renderPrevious={this.renderPreviousButton.bind(this)}
                        renderNext={this.renderNextButton.bind(this)}
                        renderFinished={this.renderFinishedButton.bind(this)}
                        renderQuestionText={this.renderQuestionText}
                        onSurveyFinished={(answers) => this.onSurveyFinished(answers)}
                        onAnswerSubmitted={(answer) => this.onAnswerSubmitted(answer)}
                        renderTextInput={this.renderTextBox}
                        renderNumericInput={this.renderNumericInput}
                        renderInfo={this.renderInfoText}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        height: 30,
        width: 140,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
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
    surveyContainer: {
        width: 'auto',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignContent: 'center',
        padding: 5
    },
    selectionGroupContainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'flex-end',
    },
    navButtonText: {
        margin: 10,
        fontSize: 20,
        color: 'white',
        
        
        width: 'auto'
    },
    answers: {
        alignSelf: 'center',
        marginBottom: 10,
    },
    navigationButton: {
        
        minHeight: 40,
        backgroundColor: GREEN,
        padding: 0,
        borderRadius: 100,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        marginBottom: 20,
        fontSize: 20
    },
    infoText: {
        marginBottom: 20,
        fontSize: 20,
        marginLeft: 10
    },
});
