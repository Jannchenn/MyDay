import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	TouchableOpacity
} from 'react-native';

import {MapView} from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//location=33.6405, -117.735588&radius=2000&type=physiotherapy&keyword=therapist&key=AIzaSyDI8ScT5lJ5pIdwqFgfm5S868kL75kn4MI

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class TherapistComponent extends Component {
	constructor(props) {
		super(props);
		this.APIKey = 'AIzaSyDI8ScT5lJ5pIdwqFgfm5S868kL75kn4MI'
		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
		        latitudeDelta: LATITUDE_DELTA,
		        longitudeDelta: LONGITUDE_DELTA,
			},
			places: [],
			isLoading:true,
			error: null,
			url: null
		};
	}

	componentDidMount() {
	    navigator.geolocation.getCurrentPosition(
			position => {
				this.getPlaces(position.coords.latitude, position.coords.longitude);
				this.setState({region:{
								latitude: position.coords.latitude,
								longitude: position.coords.longitude,
								}});
			},
			error => {
				this.setState({
					error: 'Error getting position'
				});				
			}
	    );
  	}

	componentWillUnmount() {
    	navigator.geolocation.clearWatch(this.watchID);
  	}

  	onRegionChange = (region) => {
  		this.setState({ region });
	}

	dataFetching() {
        return new Promise(
            (resolve, reject) => {
                // simulating network delay of 2 seconds ( lets hope not! )
                setTimeout(() => {
                    resolve( "Data returned from promise" );
                }, 2000 );
            });
    }

	getPlaces(lat, long) {
		const url = this.getUrlWithParameters(lat, long, 2200, 'physiotherapy', 'AIzaSyDI8ScT5lJ5pIdwqFgfm5S868kL75kn4MI')
		console.log("URL", url)
		fetch(url)
			.then((data) => data.json())
			.then((res) => {
				const placeNames = [];
				console.log('CONVERTED TO JSON');
				console.log(res);
				res.results.map((element, i) => {
					placeNames.push(
						{coordinate: element.geometry.location,
						name: element.name
						}
					)
				})
				this.setState({places:placeNames, isLoading:false});

			})
	}

	getUrlWithParameters(lat, long, radius, type, API) {
		const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
		const location = `location=${lat}, ${long}&radius=${radius}`;
		const typeData = '&type=physiotherapy&keyword=therapist';
		const key = `&key=${API}`;
		const combo = `${url}${location}${typeData}${key}`;
		this.setState({url: combo})
		return combo
  	}

	render() {

		initialArr = ["henna", "pooja", "dimple"];
		const { isLoading } = this.state;
		console.log('rendering location component');
		const marker =  {
						coordinate: 
							{
							latitude: this.state.region.latitude,
							longitude: this.state.region.longitude
							}
						};
		return(
			 <View style={styles.container}>
        		{isLoading ? (
          			<View style={styles.loadingContainer}>
            			<Text style={styles.loadingText}>Fetching Nearby Therapists</Text>
          			</View>
        		) :
					(<View style={styles.container}>
						<MapView
					        style={{ flex: 1 }}
					        initialRegion={{
					          latitude: this.state.region.latitude,
					          longitude: this.state.region.longitude,
					          latitudeDelta: 0.0922,
					          longitudeDelta: 0.0421,
	        				}}>
	        				{this.state.places.map((place, index) => {
	        					console.log('PLACE NAMES', this.state.places);
	        					return (
	        						<MapView.Marker key={index} title={place.name} coordinate={{latitude:place.coordinate.lat,
	        																	longitude:place.coordinate.lng}} />
	        					);
	        				})}
  							
      					</MapView>
      				</View>)
				}

			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
    	height: '100%',
    	width: '100%',
	},
	loadingContainer: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#FFFDE4'
  	},
  	loadingText: {
    	fontSize: 30
  	},
	map: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'absolute'
	},
	loadingContainer: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#FFFDE4'
  	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	button: {
		alignItems:'center',
		padding:20,
		backgroundColor: '#59cbbd',
		marginTop:30,
  	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	}
});