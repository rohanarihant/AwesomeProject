import React, {Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, Content, List, ListItem, Thumbnail, Text} from 'native-base';
let {height,width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    textAlignStyle: {
        marginLeft : width*0.02,
        fontSize: 10
    }
})

export default class ListThumbnailExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            ModelList:[
                {
                    modelName:'Hyundai',
                    imageUrl:require('../Images/hyundai-icon.jpg'),
                    modelCount:10
                },
                {
                    modelName:'Toyota',
                    imageUrl:require('../Images/toyota-icon.png'),
                    modelCount:5
                },
                {
                    modelName:'Maruti Suzuki',
                    imageUrl:require('../Images/maruti-suzuki.png'),
                    modelCount:12
                },
            ]
        }
    }
    navigateModelList(modelName,e){
        if(modelName === 'Toyota'){
            Actions.list2();
        }else if(modelName === 'Maruti Suzuki'){
            Actions.profile();
        } 
    }
    render() {
        {{this.state.ModelList}}
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.ModelList} renderRow={(model)=>
                         <ListItem onPress={this.navigateModelList.bind(this,model.modelName)}>
                            <Thumbnail square size={100} source={model.imageUrl} />
                            <Text style={styles.textAlignStyle}>{model.modelName}</Text>
                            <Text note>{model.modelCount}</Text>
                        </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        );
    }
}