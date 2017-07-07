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

