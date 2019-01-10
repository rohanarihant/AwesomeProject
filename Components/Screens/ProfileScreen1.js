import React, { Component } from 'react';
// import { Image,Dimensions } from 'react-native';
import {
  Image,Dimensions,
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
  AlertIOS,
  Platform
} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Share, {ShareSheet, Button} from 'react-native-share';
const TWITTER_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABvFBMVEUAAAAA//8AnuwAnOsAneoAm+oAm+oAm+oAm+oAm+kAnuwAmf8An+0AqtUAku0AnesAm+oAm+oAnesAqv8An+oAnuoAneoAnOkAmOoAm+oAm+oAn98AnOoAm+oAm+oAmuoAm+oAmekAnOsAm+sAmeYAnusAm+oAnOoAme0AnOoAnesAp+0Av/8Am+oAm+sAmuoAn+oAm+oAnOoAgP8Am+sAm+oAmuoAm+oAmusAmucAnOwAm+oAmusAm+oAm+oAm+kAmusAougAnOsAmukAn+wAm+sAnesAmeoAnekAmewAm+oAnOkAl+cAm+oAm+oAmukAn+sAmukAn+0Am+oAmOoAmesAm+oAm+oAm+kAme4AmesAm+oAjuMAmusAmuwAm+kAm+oAmuoAsesAm+0Am+oAneoAm+wAmusAm+oAm+oAm+gAnewAm+oAle0Am+oAm+oAmeYAmeoAmukAoOcAmuoAm+oAm+wAmuoAneoAnOkAgP8Am+oAm+oAn+8An+wAmusAnuwAs+YAmegAm+oAm+oAm+oAmuwAm+oAm+kAnesAmuoAmukAm+sAnukAnusAm+oAmuoAnOsAmukAqv9m+G5fAAAAlHRSTlMAAUSj3/v625IuNwVVBg6Z//J1Axhft5ol9ZEIrP7P8eIjZJcKdOU+RoO0HQTjtblK3VUCM/dg/a8rXesm9vSkTAtnaJ/gom5GKGNdINz4U1hRRdc+gPDm+R5L0wnQnUXzVg04uoVSW6HuIZGFHd7WFDxHK7P8eIbFsQRhrhBQtJAKN0prnKLvjBowjn8igenQfkQGdD8A7wAAAXRJREFUSMdjYBgFo2AUDCXAyMTMwsrGzsEJ5nBx41HKw4smwMfPKgAGgkLCIqJi4nj0SkhKoRotLSMAA7Jy8gIKing0KwkIKKsgC6gKIAM1dREN3Jo1gSq0tBF8HV1kvax6+moG+DULGBoZw/gmAqjA1Ay/s4HA3MISyrdC1WtthC9ebGwhquzsHRxBfCdUzc74Y9UFrtDVzd3D0wtVszd+zT6+KKr9UDX749UbEBgULIAbhODVHCoQFo5bb0QkXs1RAvhAtDFezTGx+DTHEchD8Ql4NCcSyoGJYTj1siQRzL/JKeY4NKcSzvxp6RmSWPVmZhHWnI3L1TlEFDu5edj15hcQU2gVqmHTa1pEXJFXXFKKqbmM2ALTuLC8Ak1vZRXRxa1xtS6q3ppaYrXG1NWjai1taCRCG6dJU3NLqy+ak10DGImx07LNFCOk2js6iXVyVzcLai7s6SWlbnIs6rOIbi8ViOifIDNx0uTRynoUjIIRAgALIFStaR5YjgAAAABJRU5ErkJggg==";
 
//  facebook icon
const FACEBOOK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAAAQIAAWpwAX5kAX5gAX5gAX5gAXJwAXpgAWZ8AX5gAXaIAX5gAXpkAVaoAX5gAXJsAX5gAX5gAYJkAYJkAXpoAX5gAX5gAX5kAXpcAX5kAX5gAX5gAX5YAXpoAYJijtTrqAAAAIHRSTlMABFis4vv/JL0o4QvSegbnQPx8UHWwj4OUgo7Px061qCrcMv8AAAB0SURBVEjH7dK3DoAwDEVRqum9BwL//5dIscQEEjFiCPhubziTbVkc98dsx/V8UGnbIIQjXRvFQMZJCnScAR3nxQNcIqrqRqWHW8Qd6cY94oGER8STMVioZsQLLnEXw1mMr5OqFdGGS378wxgzZvwO5jiz2wFnjxABOufdfQAAAABJRU5ErkJggg==";
 
//  whatsapp icon
const WHATSAPP_ICON = "data:image/png;base64,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";
 
//  gplus icon
const GOOGLE_PLUS_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACQ1BMVEUAAAD/RDP/STX9Sjb+STT+SjX+SjX+SjX+STT/SzP/Sjb/SzX/VVX/SDb+SDP+SjX9RzT9STT9SjT+STX+SjT9SjT/SST/TTP+SjX+SjX/RDP/RzP+SjX+SjX/STf9SDX/SjX/TU3+Sjb+SjX/Qyz/Szb+SjX/TTP+SjX9STX+SjP/TTX9Szb+Szb/YCD/SzX/SzX+Sjb+STX/TTX/SzX/Szb/TDT+SjX9SzX/STf+TDX/SjT9SzX9Szb+SjX/SjX/SzX/STT9SjT9TDT+SDT/VQD9STX/STX9SjX+SjX9STX+SzT/UDD9Sjb+SjX9RzT/QED+SjT+SjX/XS7+SjX/Ui7/RC3+SjX/TTz/RzP+SjX/TTP/STf+SjX/STT/RjP+Sjb/SzX/Szz/Rjr/RzL+RzP+SjX/Szf/SjX9Sjb+SjX+Sjb+SjX+SjX+SjX/STf/SjT/SjT9SjX9SzT+RzT+STT/STT+SjX/STP/Tjf+SjX/Szb/SjX/STX9SjX/SjT/AAD/SjH/STb+SzX+Sjb+SjT9SDT+Sjb+SjX9STf9STT/SDX/TDf+STb/TjT/TjH+SjX+SDT/Sjb9SzX9RzX+TDT/TUD/STX+SjX+STX/VTn/QjH/SjX+SjX/Ri7+Szb/TTP+SjX/SDX/STT9SjX+SjX/SDL/TjT9Sjb/RjL+SjX9SzX/QED/TDT+SjX+SjX9STX/RjX/VSv/Rzb/STX/ORz/UDD9SzX+Sjb/STT9SzP+SzX+SjX+SjX9Szb/Ti//ZjPPn7DtAAAAwXRSTlMAD1uiy+j5/8FBZHQDY9zvnYSc5dGhBwr+1S0Zqu44mz4KtNkXY7Yo8YLcfp3bCGZ+sLhWaks2z4wO6VOklrtWRFSXos4DoD+D/ZnoEKasjwS7+gvfHC3kHmjtMlTXYjfZXBEWa+/nQRiK5u7c8vVGRWepp6+5eulQF/dfSHSQdQEfdrzguZzm+4KSQyW1JxrAvCaCiLYUc8nGCR9h6gvzFM41MZHhYDGYTMejCEDi3osdBj1+CSCWyGyp1PC3hUEF/yhErwAAAjFJREFUSMft1tdfE0EQB/ADJD+JKAomHoqKxhJLFCnSpdgIxobYgqhYaJKIHVQUsSFiBSuCvWPv3T/N2ZPD3EucvVcyL3sz2W8+l73ZvShKKEIxcCIsPGJQpAV9MThK1KzAEAaNHjosZviI2DgBR9psVrvCx6Ni1fjRNI5JIDx2nF5m4ejxsCRqVxMmknZMksGTVUzpu5zqJD1NAodNB2boyUzCrlnK7CSKOUCyGJOC4BSan6onaWLN5irpCIwgOAMBt5eZRVk2H+fQx7n92TzK8pT8AopCwCbGgiB4Pk1fsFDPFlG2mL9gRTTdnahnxcASDx/nq6SX6tkyYLnEo1qxknBJ2t9kVSlcq2WaZM1a0qXrtOv18Jbp9Q3l5Rv/39ubHKQ3V2xRtm7bXlkluyGra2qJ76jzwb/TxH721O9K3U1fsMfsgbCXcLFZvI+wL8ok3i/6+ECDOdxYJ/TBQ9Kw+nDTkRyHtodKjjbLyGMtx304cTKi8NRpoVutfJp5xgtv21ntxGw/J7T3PNdeuAhcuqxn9o5W0p1Ma78CpF/9lzdfI3ydiStobrjhIL4BRN7k4WRa3i5D5RbQ3cPDMcDtO4ZKGXCXedtuQL1nqNwHHjDxQ/rNGYbKI/gfM/ETwv6ngafSM3RwH3O7eK86Wzz9L582PO9lN9iLl6KpXr2uf9P7tvHde4e75oNEZ3/85NQ2hKUyzg/1c57klur68vXbd9XtdP34+et36C9WKAZo/AEHHmXeIIIUCQAAAABJRU5ErkJggg==";
 
//  email icon
const EMAIL_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABC1BMVEUAAAA/Pz8/Pz9AQEA/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz8/Pz8+Pj4+Pj4/Pz8/Pz8/Pz9AQEA+Pj5AQEA/Pz87Ozs7Ozs/Pz8+Pj47OztAQEA/Pz89PT01NTVBQUFBQUE/Pz8/Pz8+Pj4/Pz9BQUE+Pj4/Pz8/Pz89PT0+Pj4/Pz9BQUFAQEA9PT09PT0/Pz87Ozs9PT05OTk/Pz8+Pj4/Pz9AQEA/Pz8/Pz8/Pz8/Pz+AgIA+Pj4/Pz8/Pz9AQEA/Pz8/Pz8/Pz8/Pz8+Pj4/Pz8/Pz8/Pz9AQEA+Pj4/Pz8+Pj4/Pz85OTk/Pz8/Pz8/Pz8/Pz88PDw9PT0/Pz88PDw8PDw+Pj45OTlktUJVAAAAWXRSTlMA/7N4w+lCWvSx8etGX/XlnmRO7+1KY/fjOGj44DU7UvndMec/VvLbLj7YKyiJdu9O7jZ6Um1w7DnzWQJz+tpE6uY9t8D9QehAOt7PVRt5q6duEVDwSEysSPRjqHMAAAEfSURBVEjH7ZTXUgIxGEa/TwURUFyKYgMURLCvbe2gYAV7ff8nMRksgEDiKl7lXOxM5p8zO3s2CWAwGAx/CjXontzT25Y+pezxtpv2+xTygJ+BYOvh4BBDwx1lKxxhNNZqNjLK+JjVWUYsykj4+2h8gpNTUMkIBuhPNE+SKU7PQC3D62E60ziYzXIuBx0Z+XRTc9F5fgF6MhKNzWXnRejKWGJdc9GZy8AP3kyurH52Ju01XTkjvnldNN+Qi03RecthfFtPlrXz8rmzi739Ax7mUCjy6FhH/vjPonmqVD6pdT718excLX/tsItLeRAqtc7VLIsFlVy/t6+ub27v7t8XD490niy3p+rZpv3i+jy/Or+5SUrdvcNcywaDwfD/vAF2TBl+G6XvQwAAAABJRU5ErkJggg==";
 
//  pinterest icon
const PINTEREST_ICON = "data:image/png;base64,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"
 
//  clipboard icon
const CLIPBOARD_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAB5lBMVEUAAAA8PDw+Pj4/Pz8/Pz8/Pz8/Pz8+Pj47OzsAAAA5OTk+Pj4/Pz8/Pz8+Pj49PT0/Pz8/Pz85OTlAQEA/Pz87Ozs+Pj4+Pj4/Pz8/Pz8/Pz8zMzNBQUE/Pz8/Pz8/Pz9AQEA7Ozs9PT0/Pz9AQEA+Pj4/Pz8+Pj4AAABAQEA/Pz87OztBQUE/Pz8+Pj4zMzNDQ0M/Pz89PT03Nzc/Pz8/Pz8/Pz8/Pz88PDw8PDwAAABCQkI7Ozs9PT0/Pz9AQEA/Pz8uLi4rKytAQEA/Pz89PT0+Pj4/Pz8/Pz8/Pz9CQkJAQEA/Pz9CQkI/Pz8/Pz8/Pz8+Pj49PT0/Pz8yMjI/Pz88PDw/Pz9BQUE8PDw/Pz9AQEA/Pz8/Pz8/Pz89PT0/Pz9CQkI9PT1EREQ9PT08PDw4ODg+Pj6AgIA/Pz8/Pz82NjZVVVU7Ozs/Pz81NTVAQEA/Pz8+Pj49PT1BQUE/Pz8/Pz8/Pz8vLy8/Pz87OztAQEA3Nzc9PT0+Pj4/Pz89PT0/Pz8/Pz89PT1AQEA9PT04ODgzMzM/Pz8/Pz9AQEA/Pz9AQEA/Pz83Nzc9PT0/Pz9AQEA/Pz8+Pj4+Pj5AQEA/Pz89PT1FRUU5OTk/Pz8/Pz8+Pj47Ozs/Pz89PT08PDw+Pj6z1Mg0AAAAonRSTlMAEXTG8/7pslICKMn//J0u2LcSLNu9Y0523KoKL9b7hggauZsEOuJ/ARS7VifkiwUX0bEq1f1p6KGQAz4NpnpY8AsGtMIyb46NbSOMcRuh+fGTFc0z1yKFKy/dpKff1CqKMoYPp+lAgAKd6kIDhdorJJExNjflktMr3nkQDoXbvaCe2d2EijIUn3JsbjDDF1jjOOdWvIDhmhoJfWrAK7bYnMgx8fGWAAACNUlEQVRIx+2W6V8SURSGBxEVeydMbVER1DCwRNTCEhMNsywqExXcUrNVU9NK2wy1fd9sMyvrP+1cmYH5eK5f5f3APef85hnuvfPeM6MoaaW1dWXKMGdasrJzrJtgc7dhQ+p2kzRry4OuHfmSbEEhUTt37d5TRGNxiRRrLwUczjKKyiuI3uuSYCv3ARa3ZyOu2k/xAT5b7aXra3xaVlsH1LPZg4cAvzM10wbgMBs+QqtsDKTyJroXGz7a7AgandECtPLXfKzFY8hCbcBxFudpP3Gy49RpQ8UXtgBnOOzZc53CU+e7Ism7uYnt5ji0p1e3pDmqzTnmAEr7GGz/AGEDg0MXaBgeERXrKIWFBQz2IvlYHbtEh/EycOUqVQLXVCDPxvGz+MPYdRGWjE/coGFyyg9M32SwM8PkydlQIim7JX6DxHpvM9g7c+SjoLESmqd9vjvDYO9NEzs1aahYY7SK+3Zm31Ddmp8jDx4qysIj2qt4O6dviH4xqvk5soj40vJjqjzh7HOf6BtPtb1SnulG6X3O6bHdqb5BejHbKtDOl+UcQ78iNuwzFKKvwx1v3npYJ+kd0BYynqz3Eu2OZvnB+IyCRVE+TD5qSmWBRuDjJzb8GWhIJq4xv36kWKoH6mr1vlFDnvRW86e9Qtd/qUrs1VeKv1VKbJjrOz3Wih8UrTpF37ArMlotFmfg58raLxrjvyXfifl/ku/TdZsiK9NfNcH+y93Ed4A1JzvLkmnOMClppbV19R+iQFSQ2tNASwAAAABJRU5ErkJggg==";
 
//  more icon
const MORE_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAQlBMVEUAAABEREQ9PT0/Pz8/Pz9AQEA7OzszMzM/Pz8/Pz9FRUU/Pz8/Pz9VVVUAAAA/Pz8+Pj4/Pz8/Pz9BQUFAQEA/Pz+e9yGtAAAAFnRSTlMAD5bv9KgaFJ/yGv+zAwGltPH9LyD5QNQoVwAAAF5JREFUSMft0EkKwCAQRFHHqEnUON3/qkmDuHMlZlVv95GCRsYAAAD+xYVU+hhprHPWjDy1koJPx+L63L5XiJQx9PQPpZiOEz3n0qs2ylZ7lkyZ9oyXzl76MAAAgD1eJM8FMZg0rF4AAAAASUVORK5CYII=";
 
 
const REACT_ICON = 'data:image/png;base64,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';
 
const {height,width} = Dimensions.get('window');
// const 
let shareImageBase64 = {
  title: "React Native",
  message: "Hola mundo",
  url: REACT_ICON,
  social: Share.Social.TWITTER
};
export default class ProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      Cars : [
         {
          id:0,
          text: 'Wagonar',
          name: 'Maruti Suzuki Wagonar',
          image: require('../Images/wagonar.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        },
        {
          id:1,
          text: 'Aulto',
          name: 'Maruti Suzuki Aulto',
          image: require('../Images/aulto.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        },
        {
          id:2,
          text: 'Baleno',
          name: 'Maruti Suzuki Baleno',
          image: require('../Images/baleno.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Nexa',
          liked: false,
          heartCount:0
        },
        {
          id:3,
          text: 'Brezza',
          name: 'Maruti Suzuki Brezza',
          image: require('../Images/brezza.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Nexa',
          liked: false,
          heartCount:0
        },
        {
          id:4,
          text: 'Celerio',
          name: 'Maruti Suzuki Celerio',
          image: require('../Images/celerio.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        },
        {
          id:5,
          text: 'Ciaz',
          name: 'Maruti Suzuki Ciaz',
          image: require('../Images/ciaz.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        },
        {
          id:6,
          text: 'Dezire',
          name: 'Maruti Suzuki Dezire',
          image: require('../Images/dezire.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        },
        {
          id:7,
          text: 'Ertiga',
          name: 'Maruti Suzuki Ertiga',
          image: require('../Images/ertiga.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        },
        {
          id:8,
          text: 'Car Eight',
          name: 'Maruti Suzuki Ignis',
          image: require('../Images/ignis.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Nexa',
          liked: false,
          heartCount:0
        },
        {
          id:9,
          text: 'S-Cross',
          name: 'Maruti Suzuki S-Cross',
          image: require('../Images/scross.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Nexa',
          liked: false,
          heartCount:0
        },
        {
          id:10,
          text: 'Swift',
          name: 'Maruti Suzuki Swift',
          image: require('../Images/swift.jpg'),
          brandIcon: require('../Images/suzukiIcon.png'),
          brandName: 'Maruti Suzuki',
          liked: false,
          heartCount:0
        }
      ]
    }
  }
  iconClick(iconName,id,e){
    if(iconName === 'heart'){
      let state = this.state;
      // let copyCount = state.Cars[id];
      state.Cars[id].liked = !state.Cars[id].liked;
      state.Cars[id].heartCount = state.Cars[id].liked?state.Cars[id].heartCount+1:state.Cars[id].heartCount-1;
      this.setState(state);
    }else{
      alert('else clik');
    }
  }
  onCancel() {
    console.log("CANCEL")
    this.setState({visible:false});
  }
  onOpen() {
    console.log("OPEN")
    this.setState({visible:true});
  }
  render() {
    let shareImageBase64 = {
      title: "React Native",
      message: "Hola mundo",
      url: REACT_ICON,
      subject: "Share Link" //  for email
    };

    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={this.state.Cars}
            renderItem={(item,index) =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail style={{resizeMode: 'contain'}} source={item.brandIcon} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.brandName}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{flex: 1,height:height*0.5, resizeMode: 'contain'}} source={item.image} />
                </CardItem>
                <CardItem>
                  <Left>
                      <Icon name="heart" style={item.liked?{color: '#ED4A6A'}:{color: '#DAE1E7'}} onPress={this.iconClick.bind(this,'heart',item.id)}/>
                      <Text>
                        {item.heartCount}
                      </Text>
                      <Icon name="chatbubbles" style={{ color: '#7D8185' }} />
                      <Icon name="ios-share-alt" style={{ color: '#4A94CE' }} onPress={this.onOpen.bind(this)} />
                  </Left>
                  <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
          <Button iconSrc={{ uri: TWITTER_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareImageBase64, {
                  "social": "twitter"
                }));
              },300);
            }}>Twitter</Button>
          <Button iconSrc={{ uri: FACEBOOK_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareImageBase64, {
                  "social": "facebook"
                }));
              },300);
            }}>Facebook</Button>
          <Button iconSrc={{ uri: WHATSAPP_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareImageBase64, {
                  "social": "whatsapp"
                }));
              },300);
            }}>Whatsapp</Button>
          <Button iconSrc={{ uri: GOOGLE_PLUS_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareImageBase64, {
                  "social": "googleplus"
                }));
              },300);
            }}>Google +</Button>
          <Button iconSrc={{ uri: EMAIL_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareImageBase64, {
                  "social": "email"
                }));
              },300);
            }}>Email</Button>
          <Button iconSrc={{ uri: PINTEREST_ICON }}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareImageBase64, {
                  "social": "pinterest"
                }));
              },300);
            }}>Pinterest</Button>
          <Button
            iconSrc={{ uri: CLIPBOARD_ICON }}
            onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                if(typeof shareOptions["url"] !== undefined) {
                  Clipboard.setString(shareOptions["url"]);
                  if (Platform.OS === "android") {
                    ToastAndroid.show('Link copiado al portapapeles', ToastAndroid.SHORT);
                  } else if (Platform.OS === "ios") {
                    AlertIOS.alert('Link copiado al portapapeles');
                  }
                }
              },300);
            }}>Copy Link</Button>
          <Button iconSrc={{ uri: MORE_ICON }}
            onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.open(shareOptions)
              },300);
            }}>More</Button>
        </ShareSheet>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
