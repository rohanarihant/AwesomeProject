import React, { Component } from 'react';
import {Container,Header,Button,Text,Body,Form,Item as FormItem,Input,Label,Title,Content,Left,Icon,Right,Item} from 'native-base';
import {Dimensions,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
let {height,width} = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonStyles:{
    paddingBottom: 10,
    alignSelf:'center',

    width:width*0.4 
  },
  createAccountStyle:{
    alignSelf:'center',
    padding:10,
    color:'#4A94CE',
    marginTop:height*0.01,
  }
})
export class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      Password:'',
      eyeIconVisible:true,
      passwordVisibillity:true
    }
  }
  authorizeUser(e){
    let state = this.state;
    // if(state.email === 'Rohan' && state.password==='arihant'){
      Actions.list();
    // }else{
    //   alert('wrong password')
    // }
  }
  passwordEyeIconEvent(){
    let {eyeIconVisible,passwordVisibillity} = this.state;
    this.setState({eyeIconVisible:!eyeIconVisible,passwordVisibillity:!passwordVisibillity});
  }
  crateAccountLink(){
    Actions.signup();
  }
  render() {
    let eyeIconName = this.state.eyeIconVisible?'ios-eye':'ios-eye-off';
    return (
      <Container style={{ paddingTop: height*0.05 }}>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input name="email" value={this.state.email} onChangeText={(text)=>this.setState({email:text})} />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input name="password" value={this.state.password} onChangeText={(text)=>this.setState({password:text})} secureTextEntry={this.state.passwordVisibillity} />
            <Icon name={eyeIconName} size={30} onPress={this.passwordEyeIconEvent.bind(this)}/>
          </FormItem>
            <Text style={styles.createAccountStyle} onPress={this.crateAccountLink.bind(this)}>Create Account</Text>
            <Button block success style={styles.buttonStyles} onPress={this.authorizeUser.bind(this)}>
              <Text > Login </Text>
            </Button>
           
            
        </Form>
      </Container>
    )
  }
}

export default WelcomeScreen