import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import { StyleSheet,Image,Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
let {height,width} = Dimensions.get('screen');
export default class ToyotaScreen extends Component {
    iconClick(iconName,e){
        // if(iconName === 'heart'){
        //   let state = this.state;
        //   // let copyCount = state.Cars[id];
        //   state.Cars[id].liked = !state.Cars[id].liked;
        //   state.Cars[id].heartCount = state.Cars[id].liked?state.Cars[id].heartCount+1:state.Cars[id].heartCount-1;
        //   this.setState(state);
        // }else{
        //   alert('else clik');
        // }
      }
    render() {
        const state = {
            ItemList:[
                {
                    picName:'NativeBase',
                    picDate:'April 15, 2016',
                    picDescription:'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
                    liked:false,
                    heartCount:0
                },
                {
                    picName:'NativeBase',
                    picDate:'April 15, 2016',
                    picDescription:'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
                    liked:false,
                    heartCount:0
                },
                {
                    picName:'NativeBase',
                    picDate:'April 15, 2016',
                    picDescription:'Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set.',
                    liked:false,
                    heartCount:0
                },
        ]
        }
        return (
            <Container>
            <Content>
                {state.ItemList.map((item)=>{
                    return(
                        <Card style={{flex: 0}}>
                            <CardItem>
                            <Left>
                                <Thumbnail source={require('../Images/toyota-icon.png')} />
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                            </CardItem>
                            <CardItem>
                            <Body style={{flex: 1}}>
                                <Image source={require('../Images/scross.jpg')} style={{flex: 1,resizeMode:'cover',width:width,height:height*0.3}}/>
                                <Text>
                                    {item.picDescription.length>100?item.picDescription.substr(0,100)+'....':item.picDescription}
                                </Text>
                            </Body>
                            </CardItem>
                            <CardItem>
                            <Left>
                                <Icon name="heart" style={{color:'#ED4A6A'}} onPress={this.iconClick.bind(this,'heart',item.id)} />
                                <Text>19 stars</Text>
                            </Left>
                            </CardItem>
                        </Card>
                    )  
                })}
            </Content>
          </Container>
        );
    }
}