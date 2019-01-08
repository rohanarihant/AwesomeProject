import React, { Component } from 'react';
// import  {commonStyles} from './commonStyles';
import {Text,Image, View,StyleSheet,Dimensions} from 'react-native';
let {height,width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const styles = StyleSheet.create({
  
  TitleText: {
    height:70,
    width:width,
    flexDirection: "row"
  },
  parentBar:{
    height: height*0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftText:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft:height*0.009,
    marginTop: height*0.05,
    backgroundColor:'red'
  },
  rightText:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight:height*0.009,
    marginTop: height*0.05
  },
  centerText:{
    // flex: 1,
    flexDirection: 'row',
    // marginLeft:20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height*0.05
  },
    
});

class ProfileScreen extends Component {
  render() {
    return (
      
      <View style={styles.parentBar}>
      <View style={styles.leftText}>
      <Text>Hello Rohan</Text>
        <Icon name="navicon" size={30} color="#fff" />
      </View>
      {/* <View style={styles.centerText}>
        <Image style={{height:35,width:25,alignItems: 'center',marginRight:5}} source={require('./icons1/nav.jpg')} />
        <Image style={{height:25,width:width*0.6,alignItems: 'center'}} source={require('./icons1/headerlogo.png')} />
        <EvilIcons name="search" size={30} color="#fff" />
      </View>
      <View style={styles.rightText}>
        <Entypo name="dots-three-vertical" size={24} color="#fff" />
      </View> */}
    
      </View>
    );
  }
}

export default ProfileScreen;
