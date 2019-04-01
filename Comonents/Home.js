import React, { Component } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Header, Card, Icon, Button, SearchBar } from "react-native-elements";
import { connect } from 'react-redux'
import ShoppingCartScreen from './ShoppingCartScreen'
import data from '../Data/data'
const CenterComponent = () => {
  return (
    <View style={{ color: '#fff' }}>

      <Text style={{ color: '#fff' }}>Home</Text>
    </View>
  )
}

const RightComponent = (props) => {

  return (
    <View >
      <View style={{
        backgroundColor: '#2ECC71',
        position: 'absolute',
        borderRadius: 50,
        width: 20,
        right: -10,
        top: -4,
        alignItems: 'center',
        zIndex: 200,

      }}
      >
        <Text style={{ color: '#fff' }}>{props.item.length}</Text>
      </View>
      <Icon name="shopping-cart" color="#fff" onPress={() => props.navigation.navigate('Checkout')} />

    </View>
  )
}

class Home extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          containerStyle={{ backgroundColor: '#1B4F72' }}
          statusBarProps={{ barStyle: "light-content", backgroundColor: "#1B4F72" }}
          leftComponent={<Image source={require('../Images/Welcome.png')} style={{ width: 50, height: 50 }} />}
          centerComponent={<CenterComponent />}
          rightComponent={<RightComponent {...this.props} />}
        />

        <ScrollView>
          {
            data.map((e) => <Card
              key={e.id}
            >
              <View>
                <Image source={{ uri: e.photo }} style={{ width: '100%', height: 200 }} />
                <Text style={{ marginBottom: 10 }}>
                  {e.name}
                </Text>
                <Button
                  onPress={() => this.props.addItem(e.dish)}

                  buttonStyle={{
                    borderRadius: 50,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    backgroundColor: '#1B4F72'
                  }}
                  title="Add To Cart" />
              </View>
            </Card>)
          }

        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state.item
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
