import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

export default class ImageButton extends PureComponent {
  static propTypes = {
    ...TouchableOpacity.propTypes,
    containerStyle: View.propTypes.style,
    selected: PropTypes.bool,
    style: Text.propTypes.style,
    styleSelected: Text.propTypes.style,
    sourceNormal: PropTypes.string,
    sourceSelected: PropTypes.string,
    text: PropTypes.string,
    onSelect: PropTypes.func,
  };

  _onSelect = (el) => {
    if (this.props.onSelect) this.props.onSelect(e1);
  }

  render() {
    const self = this;
    let selected = this.props.selected
    return (
      <TouchableOpacity
        {...touchableProps}
        testID={this.props.testID}
        style={this.props.containerStyle}
        onPress={() => self._onSelect(e1)}
        accessibilityTraits="button"
        accessibilityComponentType="button">
        <Image style={[styles.image]} source={selected ? this.props.sourceNormal : this.props.sourceNormal}>
          <Text style={[styles.text, selected ? this.props.styleSelected : this.props.style]}>{this.props.text}</Text>
        </Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  image: {
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#007aff',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
});

