import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	Button,
	TouchableHighlight,
	Text
} from 'react-native';

export default class TagComponent extends React.Component {
	constructor(props){
    	super(props)
    	this.state = {
        	pressStatus: false,
      	}
    }

    onPress() {
    	this.setState({
    		pressStatus: true
    	});

    }
  	
	render() {
		return (
			<View style={styles.tag}>
				<TouchableHighlight style={this.state.pressStatus ? styles.tagButtonClicked : styles.tagButton} onPress={() => this.onPress()}>
          			<Text style={this.state.pressStatus
                            ? styles.tagTextClicked
                            : styles.tagText}>{this.props.itemText}</Text>
          		</TouchableHighlight>
			</View>
		);
	}	
}

const styles = StyleSheet.create({
	tag: {
		width: '33%',
		height: '15%',
		padding: 10,
	},
	tagButton:{
	    paddingTop:5,
	    paddingBottom:5,
	    backgroundColor: 'purple',
	    borderRadius:10,
	    borderWidth: 1,
	    borderColor: '#fff'
	},

	tagButtonClicked:{
		borderRadius:10,
	    borderWidth: 1,
	    borderColor: '#fff',
	    paddingTop:5,
	    paddingBottom:5,
		backgroundColor: '#dadcdb'
	},
  	tagText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  	},
  	tagTextClicked:{
      color:'purple',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  	}
})