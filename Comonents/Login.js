import React, { Component } from "react";
import { Image, StyleSheet, SafeAreaView, View, StatusBar } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#117A65" barStyle="light-content" />
        <Image
          style={{ width: 128, height: 128 }}
          source={require("../Images/Welcome.png")}
        />

        <View style={{ marginTop: 10 }}>
          <Input
            placeholder='Username'
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.input}
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
                
              />

            }
          />
          <Input
            
            placeholder='Password'
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.input}
            leftIcon={
              <Icon
                name='key'
                size={24}
                color='black'
              />

            }
          />
          <Input
            
            placeholder='Mobile'
            inputContainerStyle={styles.inputContainer}
            containerStyle={styles.input}
            leftIcon={
              <Icon
                name='mobile'
                size={24}
                color='black'
              />

            }
          />
          <Button title="LOGIN" 
          buttonStyle={styles.button} 
          containerStyle={{marginTop:10}} 
          onPress={()=>this.props.navigation.navigate('Dashboard')}
          />
          <Button title="BACK" 
          buttonStyle={styles.button}       
          containerStyle={{marginTop:10}}  
          onPress={() => this.props.navigation.navigate("Welcome")}
          />
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#117A65"
  },
  logo: {
    marginTop: 100
  },
  logoText: {
    fontSize: 20,
    padding: 10,
    color: "#fff",
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginTop:10
  },
  inputContainer: {
    width: '70%',
    borderBottomWidth: 0,
    
  },
  button: {
    backgroundColor: "#1B4F72",
    borderRadius: 50,
    
  },

});

export default Login;
