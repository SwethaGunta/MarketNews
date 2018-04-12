import React, { Component } from 'react';
import {Platform,  StyleSheet,  Text, FlatList,  View,Image, Alert } from 'react-native';
import { Container, Content } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import { List, ListItem, Icon } from 'react-native-elements';
import {get_cryptoData}  from '../myApi/myapi';

export default class MarketTab extends Component{

    constructor(){
        super();
        this.state = {
            dataSource: []
        }
        }
        
      async  componentDidMount(){
        let resp = await get_cryptoData()
        if (resp.status !== 200)
            {
            if (resp.status === 504) {
                Alert.alert("Network Error", "Check your internet connection" )
              } else {
               Alert.alert("Unauthorized")      
              }
            } 
        else
           {
               resp.json().then(data =>
                {
                    this.setState({dataSource:data})
                }
               )}
    
}   
        round_to_four = (value)=>{
            return parseFloat(value).toFixed(4)
        }
        suitable_icon = (percent_change) =>
        {
            if(percent_change >=0)
            {
                return <Entypo name="triangle-up" size={22} style={{
                    color: '#008000'
                }}/>
            }
            else
            {
                return <Entypo name="triangle-down" size={22}
            style={{color:'#800000'}}/>
            }
        }
        
    render(){
        return(
            <Container>
                <Content>
                    <FlatList style={{backgroundColor:'#37474F'}} keyExtractor = {item => item.id }  data={this.state.dataSource}
                    renderItem = {({ item })=>(
                        <ListItem title={item.name} titleStyle={{color:'#FFFFFF'}}
                                    subtitle={`$`+`${item.price_usd}` + ` <--> ` + `BTC` + this.round_to_four(item.price_btc)}
                    rightIcon = {this.suitable_icon(item.percent_change_1h)} rightTitle = {item.percent_change_1h} rightTitleStyle={{color:'#FFFFFF'}}
                    />
                    )
                    }/>
                </Content>
            </Container>
        );
    }
}

