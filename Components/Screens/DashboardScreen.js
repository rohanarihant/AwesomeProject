import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class DashboardScreen extends Component {
  render() {
    return (
      <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
        <Text>This is the Dashboard screen</Text>
      </View>
    )
  }
}

export default DashboardScreen