import {
   Image,
 } from 'react-native';
 import React from 'react';


 const TabOptions = (navigation, normalImage, selectedImage, tabBarTitle, navTitle) => ({
   headerBackTitle: null,
   tabBarLabel: tabBarTitle,
   headerTitle: navTitle,
   headerTitleStyle: {
     color: '#fff',
     textAlign: 'center',
     alignSelf: 'center',
     fontSize: 18,
   },
   headerStyle: {
     backgroundColor: '#4ECBFC',
   },
   headerLeft: null,
   tabBarIcon: ({ focused }) => (
     focused ?
       <Image
         source={selectedImage}
         resizeMode="contain"
         style={{ height: 26, width: 26 }}
       />
     :
       <Image
         source={normalImage}
         resizeMode="contain"
         style={{ height: 26, width: 26 }}
       />
   ),
 });
 export default TabOptions;