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
export class SignUpScreen extends Component {
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
  loginLink(){
      Actions.welcome();
  }
  render() {
    let eyeIconName = this.state.eyeIconVisible?'ios-eye':'ios-eye-off';
    return (
      <Container style={{ paddingTop: height*0.05 }}>
        <Header>
          <Body>
            <Title>SignUp</Title>
          </Body>
        </Header>
        <Form>
          <FormItem floatingLabel>
            <Label>First Name</Label>
            <Input name="firstName" value={this.state.firstName} onChangeText={(text)=>this.setState({firstName:text})} />
          </FormItem>
          <FormItem floatingLabel>
            <Label>Last Name</Label>
            <Input name="lastName" value={this.state.lastName} onChangeText={(text)=>this.setState({lastName:text})} />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input name="password" value={this.state.password} onChangeText={(text)=>this.setState({password:text})} secureTextEntry={this.state.passwordVisibillity} />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Confirm Password</Label>
            <Input name="confirmPassword" value={this.state.confirmPassword} onChangeText={(text)=>this.setState({password:text})} secureTextEntry={this.state.passwordVisibillity} />
          </FormItem>
            <Text style={styles.createAccountStyle} onPress={this.loginLink.bind(this)}>Login</Text>
            <Button block success style={styles.buttonStyles} onPress={this.authorizeUser.bind(this)}>
              <Text > SignUp </Text>
            </Button>
           
            
        </Form>
      </Container>
    )
  }
}

export default SignUpScreen