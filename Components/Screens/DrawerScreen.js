import React, { Component } from 'react';
import {View,Text} from 'react-native'
import Drawer from 'react-native-drawer';
// import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Stack, Lightbox } from 'react-native-router-flux';
import FeedScreen from './FeedScreen';
import SideBarScreen from './SideBarScreen';
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  }
class DrawerScreen extends Component {
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    render(){
        return (
            <View>
                <Text onPress={()=>this.openControlPanel()}>Hello</Text>
                <Drawer
                ref={(ref) => this._drawer = ref}
  type="static"
  content={<SideBarScreen />}
  openDrawerOffset={100}
  styles={drawerStyles}
  tweenHandler={Drawer.tweenPresets.parallax}
  >
    <FeedScreen />
</Drawer>
            </View>
            
        );
    }
}


export default DrawerScreen; 