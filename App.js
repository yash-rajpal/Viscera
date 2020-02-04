import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';
import home from './src/home';
import LoginWithEmail  from './src/LoginWithEmail'
import LoginWithMobile from './src/LoginWithMobile';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'



const AppStackNav = createStackNavigator({
 // LoginWithMobile:{screen:LoginWithMobile},
  LoginWithEmail:{screen:LoginWithEmail},
  home:{screen: home},
  
})


const AppContainer = createAppContainer(AppStackNav);

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
          <AppContainer />
      </View>
    )
  }
}

