import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  Dimensions
} from 'react-native';


import { db } from './config';
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginLayout from './LoginLayout'

export default class LoginWithEmail extends Component {
    

    componentDidMount(){
      const screenWidth = Math.round(Dimensions.get('window').width);  
      const screenHeight = Math.round(Dimensions.get('window').height);
      this.setState({
        screenWidth:screenWidth,
        screenHeight:screenHeight
      })
    }

    state = {
      UserName: '',
      Password:'',
    };

    createUser = (item,item1) => {
      var email=item
      var password=item1
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        console.log("user created");
        this.props.navigation.navigate('home');
        console.log("Navigating")
      }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      });
    };

    signIn=(item,item1)=>{
      var email=item
      var password=item1
      firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        console.log("user created");
        this.props.navigation.navigate('home');
        console.log("Navigating")
      }).catch(function(error) {
        // Handle Errors here.
        console.log("no user exist")
        // ...
      });
    }

    handleChangeName = e => {
      this.setState({
        UserName: e.nativeEvent.text
      });
    };
  
    handleChangePass = e => {
      this.setState({
        Password: e.nativeEvent.text
      });
    };
    handleSubmit = () => {
      this.signIn(this.state.UserName,this.state.Password);
      Alert.alert('Item saved successfully');
    };
  
    render() {
      console.log(this.state.screenWidth);
      console.log(this.state.screenHeight);
      return (
          <View style={styles.main}>
              <LoginLayout />    
            <View style={styles.input}>
                <Text style={styles.LoginHeaders}>Mobile Number</Text>
                <TextInput style={styles.itemInput} onChange={this.handleChangeName} />
                <TouchableHighlight
                  style={styles.button}
                  underlayColor="white"
                  //onPress={this.handleSubmit}
                >
                <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
             </View>
            </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    main:{
      flexDirection:"column",
      height:'100%',
      position:"relative",
      padding: 5,
      backgroundColor:'white'
    },
    input:{
      backgroundColor:'white',
      position:'absolute',
      width:'100%',
      top:275,
    },
    LoginHeaders: {
      marginLeft: 5,
      paddingLeft:5,
      fontSize: 25,
      textAlign: 'left',
    },
    itemInput: {
      height: 50,
      paddingLeft: 5,
      marginLeft: 5,
      fontSize: 23,
      borderWidth:1,
      borderColor:'white',
      borderRadius: 8,
      color: 'white',
      shadowRadius:9,
      shadowOffset:{height:5},
      elevation:5,
    },
    buttonText: {
      fontSize: 22,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
  });