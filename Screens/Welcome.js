import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { Button, Divider, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

class Welcome extends Component {
  render() {
    return (
      <SafeAreaView

        style={{
          flex: 1,
          backgroundColor: "#117A65",
          justifyContent: "center"
        }}
      >
        <StatusBar
          backgroundColor="#117A65"
          barStyle="light-content"
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Image
            source={require("../Images/Welcome.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 40, }}>
          <Button
            title="LOGIN"
            buttonStyle={styles.login}

            onPress={() => this.props.navigation.navigate("Login")}
          />

          <Button
            title="SIGN UP"
            buttonStyle={styles.signup}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("SignUp")}
          />

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: "#1B4F72",
    borderRadius: 50,
    width: "100%",
    paddingRight: "30%"
  },
  signup: {
    backgroundColor: "#1B4F72",
    borderRadius: 50,
    width: "100%",
    paddingRight: "30%"
  }
});
export default Welcome;
