import React, { Component } from 'react';
import {Platform,  StyleSheet,  Text,   View,Image } from 'react-native';
import {Container, Content, Header, Left, Body, Right, Title, Footer, FooterTab, Button} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MarketTab from './marketTab';
import NewsTab from './newsTab';

export default class HomePage extends Component 
{
    static navigationOptions={
        headerLeft:<Entypo name='menu' size={32} color='#37474F'/>,
        headerTitle:<Image source={require('../assets/at&c.png')} style={{width:75,height:36}} resizeMode='contain'/>,
        headerStyle:{
            backgroundColor: '#000000'
        }
    }
    constructor(){
        super();
        this.state = {
            selectedTab: 'Markets'
        }
    }
    renderContent = (Tab)=>{
        switch(Tab)
        {
            case 'Markets':
            return (<MarketTab />)
            break
            case 'News':
            return (<NewsTab />)
            break
        }

    }
    marketTabPress = () =>
    {
        this.setState({selectedTab:'Markets'})
    }
    newsTabPress = () =>{
        // this.props.navigation.navigate('NewsTab')
        this.setState({selectedTab:'News'})
    }
render()
{
    return(
        <Container>
            {/* <Header>
                <Left>
                    <Ionicons name='md-menu' size={14} />
                </Left>
                <Body>
                    <Title>
                        AT and C
                        {/* <i data-icon={String.fromCharCode(parseInt('f00f', 16))} /> */}
                   {/* </Title>
                </Body>
                <Right></Right>
            </Header> */}
            <Content style={{
                backgroundColor: '#37474F'
            }}>
                {this.renderContent(this.state.selectedTab)}
            </Content>
                <Footer>
                    <FooterTab style={{
                        backgroundColor:'#616161'
                    }}>
                        <Button vertical onPress={this.marketTabPress}>
                            <Ionicons name = 'ios-trending-up' size={24} />
                            <Foundation name='graph-bar' size={24} />
                            <Text>Markets</Text>
                        </Button>
                        <Button vertical onPress={this.newsTabPress}>
                            <Entypo name = "news" size={24}/>
                            <Text>News</Text>
                             </Button>
                    </FooterTab>
                </Footer>
        </Container>
    );
}
}