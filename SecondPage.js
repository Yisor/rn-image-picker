// import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class SecondPage extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>SecondPage</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

