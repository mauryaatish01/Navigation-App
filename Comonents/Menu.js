import React, { Component } from "react";
import { SafeAreaView, Text, Button, FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";

const list = [
  {
    title: "Appointments",
    icon: "av-timer"
  },
  {
    title: "Trips",
    icon: "flight-takeoff"
  }
];

class Menu extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    
  };
  render() {
    console.log(this.props.itemName);
    return (
      <SafeAreaView>
        <Text>Form Screen</Text>

        <Button
          title="GO Back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>Current Item in Store {this.props.item}</Text>
        <View>
          
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    item: state.item,
    itemName: state.itemName
  };
};
export default Menu;
