//import liraries
import React, { Component, PropTypes, Children } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default class ButtonProvider extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.element.isRequired,
  };
  render() {
    return React.Children.only(this.props.children);
  }

  sumButtons() {
    Children.forEach(children, (child, index) => {
      if (!React.isValidElement(child)) {

        return;
      }

    });
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
