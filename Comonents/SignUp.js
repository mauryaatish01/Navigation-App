import React, { Component } from "react";
import { Image, StyleSheet, View, Text, StatusBar, TextInput, AsyncStorage } from 'react-native'
import { Button } from "react-native-elements";


class SignUp extends Component {

  handleBack=async ()=>{
    console.log("handleBack")
    await AsyncStorage.setItem('username','atish')
    this.props.navigation.navigate('Welcome')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#1B4F72"
          barStyle="light-content"
        />
        
        <Button title='Go Back' 
          onPress={this.handleBack}        
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1B4F72',
    justifyContent:'center'

  }
  
})

export default SignUp;