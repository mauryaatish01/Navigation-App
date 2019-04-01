import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { ListItem,Header, Icon } from 'react-native-elements';

class ShoppingCartScreen extends Component {
   render() {

      return (
         <ScrollView>
         <Header 
            centerComponent={{ text: 'Items in Cart', style: { color: '#fff' } }}
            containerStyle={{backgroundColor:'#1B4F72'}}
            statusBarProps={{ barStyle: "light-content", backgroundColor: "#1B4F72" }}
         />
         
         {
            this.props.item.length>0?
            this.props.item.map((e)=>
            <ListItem 
               contentContainerStyle={{alignItems:'center'}}
               key={Math.random()}
               title={e}
               leftIcon={{ name:'delete', color:'#E74C3C'}}
            />
            ):
            <Text>No Items in Your Cart</Text>
         }
         </ScrollView>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      item: state.item
   }
}
export default connect(mapStateToProps)(ShoppingCartScreen);