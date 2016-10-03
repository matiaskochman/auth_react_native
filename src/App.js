import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	
	componentWillMount(){
		  var config = {
				    apiKey: "AIzaSyCChPQTEoVUiRqB09ff2CdWGqYyl3RlHJA",
				    authDomain: "auth-react-native-b940b.firebaseapp.com",
				    databaseURL: "https://auth-react-native-b940b.firebaseio.com",
				    storageBucket: "auth-react-native-b940b.appspot.com",
				    messagingSenderId: "1018057160298"
				  };
		  firebase.initializeApp(config);
	}
	render(){
		return(
				<View>
					<Header headerText="Authentication"/>
					<LoginForm/>
				</View>
		);
	}
}

export default App; 