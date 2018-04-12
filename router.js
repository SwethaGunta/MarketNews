import React, {Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from './pages/homePage';
import LogoPage from './pages/logoPage';
import {Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const StackScreens = new StackNavigator({
    Logo: {screen: LogoPage},
    Home :  {screen : HomePage}
},{
    initialRouteName: 'Logo',
    headerMode: 'float'
});
