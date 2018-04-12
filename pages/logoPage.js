import React, { Component } from 'react';
import {Platform,  StyleSheet,  Text,   View, Image, Animated, Easing } from 'react-native';
import {Container, Content, Header, Left, Body, Right, Title, Footer, FooterTab, Button} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class LogoPage extends Component 
{
    static navigationOptions={
        header: null
    }
    constructor(){
        super();
    //     this.state={
    //         slide: new Animated.ValueXY({x:0, y:0})
    //     }
    //     this.slideIn = Animated.decay(this.state.slide,{
    //         toValue: {x:0, y:500},
    //         duration: 2000,
    //         delay: 1000,
    //         easing: Easing.in(Easing.ease)
    //     })
        
    }
    componentDidMount()
    {
        //this.slideIn.start();
        setTimeout(()=>{this.props.navigation.navigate('Home')},3000)
    }
    render(){
        //const slideStyle = this.state.slide.getTranslateTransform();
        return(
            <Container>
                <Content style={{
                    backgroundColor: '#000000'
                }} >
                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    
                    {/* <Animated.View style={slideStyle}> */}
                    <Image source={require('../assets/at&c.png')} style={{
                        marginTop: '50%'
                    }}/>
                    {/* </Animated.View> */}
                    </View>
                </Content>
            </Container>
        );
    }
}