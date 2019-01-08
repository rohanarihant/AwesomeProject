import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SplashScreen from './Components/Splash/splash';
import ProfileScreen from './Components/Screens/ProfileScreen1';
import WelcomeScreen from './Components/Screens/WelcomeScreen';
import ListThumbnailExample from './Components/Screens/ListThumbnailExample';
import ToyotaScreen from './Components/Screens/ToyotaScreen';
import SignUpScreen from './Components/Screens/SignUpScreen';
// import DrawerScreen from './Components/Screens/DrawerScreen';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
let {height,width} = Dimensions.get('window');


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:true
    }
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({loading:false});
    },2000)
  }
  render() {
    return (
      <Router>
          <Stack key="root">
            <Scene key="welcome" component={WelcomeScreen} title="Login" />
            <Scene key="profile" component={ProfileScreen} title="Instagram"/>
            <Scene key="list" component={ListThumbnailExample} title="List"/>
            <Scene key="list2" component={ToyotaScreen} title="List"/>
            <Scene key="signup" component={SignUpScreen} title="List"/>
            
          </Stack>
      </Router>
      // <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#34495e'}}>
      //   {this.state.loading?<SplashScreen />:
      //   <Text>Hello Rohan</Text>}
      // </View>
    )
  }
}
export default App;