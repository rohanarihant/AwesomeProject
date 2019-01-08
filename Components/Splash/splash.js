import React from 'react';
import { StatusBar ,Image, View , Text ,Dimensions, ActivityIndicator } from 'react-native';
let {height,width} = Dimensions.get('window');


export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#34495e'}}>
                {/* <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/> */}
                <Image
          style={{width: width, height: height}}
          source={require('./Icons/giphy.gif')}
        />
                <ActivityIndicator color={'white'}/> 
            </View>
        )
    }
}