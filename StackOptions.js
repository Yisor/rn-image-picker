
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Button,
  View,
} from 'react-native';

const StackOptions = navigation => ({
  headerBackTitle: null,
  headerTitleStyle: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
  headerStyle: {
    backgroundColor: '#4ECBFC',
  },
  headerLeft: (<Button onPress={() => { navigation.goBack(null); }} />),
});
export default StackOptions;
