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

import {heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { db } from './config';
import * as firebase from 'firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginLayout from './LoginLayout';

const screenWidth = Math.round(Dimensions.get('window').width);  
const screenHeight = Math.round(Dimensions.get('window').height);

export default class LoginWithEmail extends Component {
    state = {
      UserName: '',
      Password:'',
    };

    createUser = (item,item1) => {
      var email=item
      var password=item1
      console.log(email);
      console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
        console.log("user created");
        this.props.navigation.navigate('home');
        console.log("Navigating")
      }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        // console.log(errorMessage);
        // ...
      });
    };

    signIn=(item,item1)=>{
      var email=item
      var password=item1
      console.log(email);
      console.log(password);
      firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        console.log("user created");
        this.props.navigation.navigate('home');
        console.log("Navigating")
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message)
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
      return (
          //styles the main page or the main layout of the page with flex 1
          <View style={styles.main}>
            
            {/* component screen imported to give the layout with logo and name  */}
                <LoginLayout/>  
             
            {/* hold the...
             1.view for user input field, with required input username and password for logging,
             2.view for login via other means (Mobile & Google)
             3.view for footer providing option *Create Account & *Forgot Password*/}
            <View style={styles.Body}>

                {/* view for user input field */}
                <View>

                    <Text style={styles.LoginHeaders}>UserName</Text>
                    <TextInput style={styles.itemInput} onChange={this.handleChangeName} />

                    <Text style={styles.LoginHeaders}>Password</Text>
                    <TextInput style={styles.itemInput} onChange={this.handleChangePass} />

                    {/* executes the handleubmit function defined above, for firebase authentication  */}
                    <TouchableHighlight
                      style={styles.button}
                      underlayColor="white"
                      onPress={()=>{
                        this.createUser(this.state.UserName, this.state.Password)
                      }}
                    >
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableHighlight> 

                </View>

                {/* view for login via other means */}
                <View style={styles.LoginViaOthers}>
                      <View style={{height:20,left:120}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:20}}>
                              LOGIN via MOBILE
                            </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{height:20,top:20,left:120}}>
                          <TouchableOpacity>
                              <Text style={{fontSize:20}}>
                                LOGIN via GOOGLE
                              </Text>
                          </TouchableOpacity>
                      </View>
                </View>

                {/* view for footer option */}
                <View style={styles.Footer}>
                    <View style={{position:'absolute'}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:18}}>
                              Create Account
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{position:'absolute',right:0,backgroundColor:"yellow"}}> 
                        <TouchableOpacity>
                            <Text style={{fontSize:18}}>
                              Forgot Password
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> 
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    main:{
      flex:1,
      padding:wp('2%'),
      backgroundColor:'white'
    },

    Body:{
      // backgroundColor:'pink',
      position:'absolute',
      width:wp('100%'),
      top:hp('22%'),
      height:hp('100%'),
      // flex:0.2,
    },

    LoginHeaders: {
      marginLeft:wp('2%'),
      paddingLeft:wp('2%'),
      fontSize:wp('6.5%'),
      textAlign: 'left',
    },

    itemInput: {
      height: hp('6.5%'),
      paddingLeft: wp('2%'),
      marginLeft: wp('2%'),
      fontSize: wp('5.5%'),
      borderWidth:wp('0.3%'),
      borderColor:'white',
      borderRadius: wp('1.5%'),
      color: 'grey',
      shadowRadius:wp('2%'),
      shadowOffset:{height:hp('4%')},
      elevation:wp('1.5%'),
    },

    buttonText: {
      fontSize: wp('6%'),
      color: '#111',
      alignSelf: 'center'
    },

    button: {
      height: hp('5.5%'),
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginTop: 10,
      justifyContent: 'center',
      backgroundColor:'blue',
    },

    LoginViaOthers:{
      // flex:1,
      height:100,
      width:wp('100%'),
      position:"absolute",
      top:280,
      backgroundColor:'blue'
    },

    Footer:{
      position:'absolute',
      top:380,
      height:100,
      width:wp('100%'),
      backgroundColor:'green'
    },
    //style for user input view ... not implemented yet... 
    // UserInput:{
    //   width:wp('100%'),
    //   position:'absolute'
    // }
  });