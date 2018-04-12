import React, { Component } from 'react';
import {Platform,  StyleSheet,  Text, FlatList,  View, Image, Alert, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import {get_crypto_news_data} from '../myApi/myapi';
import { List, ListItem} from 'react-native-elements';


export default class NewsTab extends Component{
    constructor(){
        super();
        this.state={
            dataSource: []
        }
    }
    async componentDidMount(){
    let resp = await get_crypto_news_data()
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
                data = data.articles
                this.setState({dataSource:data})
            }
           )}
    }
    getMonthName = (month)=>
    {
        let monthArr = ["Jan","Feb", "Mar", "Apr", "May", "Jun", "July"]
        return monthArr[month-1]
    }
    changeTimeFormat = (publishedAt) =>
    {
        let millisecs = Date.parse(publishedAt)
        let date = new Date(millisecs)
        let monthName = this.getMonthName(date.getMonth())
        return (date.getUTCDate() + " " + monthName + " " + date.getUTCFullYear())
    }


    render(){
        return(
            <Container>
                <Content>
                        <FlatList  style={{backgroundColor: '#37474F'}} keyExtractor={item =>item.title} data={this.state.dataSource}
                            renderItem={({ item })=><ListItem title={item.title} titleStyle={{color: '#FFFFFF'}}
                            avatar={{uri:item.urlToImage}} subtitle={`${item.source.name}` + " | " + this.changeTimeFormat(item.publishedAt)}/>}
                            
                        >   
                        </FlatList>
                </Content>
            </Container>
        );
    }
}