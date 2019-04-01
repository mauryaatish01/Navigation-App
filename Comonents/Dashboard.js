import React,{Component} from 'react'
import {SafeAreaView,ScrollView,View,Image,AsyncStorage,Text} from 'react-native'
import { Button } from 'react-native-elements';

class Dashboard extends Component{
           state={
                     value:''
           }
           handlePress=async ()=>{
               
               let v= await AsyncStorage.getItem('username'); 
               console.log('handlePress',v)
               this.setState({
                         value:v
               })

           }
          render(){
                    return(
                              <SafeAreaView style={{flex:1,backgroundColor:'#F2F3F4'}}>
                                        <View>
                                        <ScrollView >
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3,borderWidth:1}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3,borderWidth:1}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3,}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3,}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3,}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                               <View style={{height:125,width:"90%",marginLeft:20,marginTop:10,elevation:3,}}>
                                                  <Text>This is a text view</Text>
                                               </View> 
                                                
                                        </ScrollView>
                                        </View>
                                        <View style={{flex:1,margin:10}}>
                                              <Button title='GET' onPress={this.handlePress}/>
                                              <Button title='Sign Out' onPress={()=>this.props.navigation.navigate('Login')}/>
                                              <Text>Vlaue in Storage is {this.state.value}</Text>
                                                  
                                        </View>
                                        
                              </SafeAreaView>
                    )
          }
}
export default Dashboard;