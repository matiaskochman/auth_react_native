import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Card,CardSection,Button,Input,Spinner} from './common'

class LoginForm extends Component{
	
	state = {email:'',password:'',error:'' ,loading:false};
	
	
	onLoginFail(){
		console.log('onLoginFail()');
		
		this.setState({
			error:'Authentication failed.',
			loading:false
		});
	}
	
	
	onLoginSuccess(){
		console.log('onLoginSuccess()');

		this.setState({
			error:'',
			user:'',
			password:'',
			loading:false
		});
	}

	onButtonPress(){
		console.log('onButtonPress()');
		
		this.setState({error:'',loading:true});
		//return;
		
		const {email,password} = this.state;
		
		firebase.auth().signInWithEmailAndPassword(email,password).
			then(this.onLoginSuccess.bind(this)).
			catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email,password).
					then(this.onLoginSuccess.bind(this)).
					catch(this.onLoginFail.bind(this));
					
			});
	}
	
	onRenderButton(){
		console.log('onRenderButton()');

		if(this.state.loading){
			return <Spinner size="small"/>
		}else{
			
			console.log('algo')
			return(
					<Button whenPressed={this.onButtonPress.bind(this)}>
						Login
					</Button>
			);
		}
		
	}
	
	render(){
		return(
				<Card>
					<CardSection>
						<Input
							placeholder="user@gmail.com"
							label="Email"
							value={this.state.email}
							onChangeText={text => this.setState({email:text})}
						/>
					</CardSection>
						<Input
							isPassword
							placeholder="password"
							label="Password"
							value={this.state.password}
							onChangeText={password => this.setState({password})}
						/>
					
					<CardSection>
						
					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>	
					
					</CardSection>
					<CardSection>
						{this.onRenderButton()}
					</CardSection>
					
				</Card>
		);
		
	}
};

const styles = {
		errorTextStyle:{
			fontSize:20,
			alignSelf:'center',
			color:'red'
		}
}

export default LoginForm;