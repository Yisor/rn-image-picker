/*
 *  @File   : MainPage
 *  @Author : lslin
 *  @Date   : 2017-7-5 15:55:39
 *  @Last Modified   : 2017-7-5 15:55:39
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

