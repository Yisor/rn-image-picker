/*
 *  @File   : BasicTabs
 *  @Author : lslin
 *  @Date   : 2017-7-5 15:48:57
 *  @Last Modified   : 2017-7-5 15:48:57
 */


import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  Image,
} from 'react-native';
import TabOptions from './TabOptions';
import MainPage from './MainPage';
import SecondPage from './SecondPage';

const btnNormal = require('./images/btn_bg_normal.png');
const btnSelect = require('./images/btn_bg_selected.png');

const BasicTabs = TabNavigator(
  {
    MainPage: {
      screen: MainPage,
      navigationOptions: ({ navigation }) => {
        return TabOptions(navigation, btnNormal, btnSelect, '消息', '消息');
      },
    },
    /******不显示导航栏如下******/
    SecondPage: {
      screen: SecondPage,
      navigationOptions: ({ navigation }) => {
        return {
          ...TabOptions(navigation, btnNormal, btnSelect, '通讯录', '通讯录'),
          header: null,
        };
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true, // android
      activeTintColor: '#1ab20a',
      inactiveTintColor: '#808080',
      indicatorStyle: { height: 0 }, // android
      style: {
        height: 49,
        backgroundColor: '#fff',
        borderTopColor: '#000',
        borderTopWidth: 0.5,
      },
      iconStyle: {
        width: 26,
        height: 26,
      }, // android
      labelStyle: {
        marginTop: 0,
        fontSize: 12,
      }, //android
    },
    tabBarPosition: 'bottom', // android
    swipeEnabled: false, // android
    animationEnabled: false, // android
    backBehavior: 'none',
  });

export default BasicTabs;
