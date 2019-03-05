import React, { Component } from 'react';  
import { View, Text, StyleSheet } from 'react-native';  
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class FoodComponent extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        items: PropTypes.array.isRequired
      };
    
    render() {
        return (
           <ScrollView>
                {this.props.items.map((item, index) => {
                    let category = item.category.toString();
                    return (
                        <Card key={index} title={item.name}>
                            <Text><Text style={{fontWeight: "bold"}}> Category: </Text>{category}</Text>
                            <Text><Text style={{fontWeight: "bold"}}> Nutrient: </Text>{item.nutrient.toString()}</Text>
                            <Text><Text style={{fontWeight: "bold"}}> Description: </Text>{item.description}</Text>
                        </Card>
                    );
                })}
            </ScrollView>
        );
    }
}

export default FoodComponent;
