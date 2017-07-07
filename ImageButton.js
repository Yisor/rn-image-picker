import React, { PureComponent, PropTypes } from 'react';
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
    style: View.propTypes.style,
    selected: PropTypes.bool,
    textStyle: Text.propTypes.style,
    selectedTextStyle: Text.propTypes.style,
    image: PropTypes.number.isRequired,
    selectedImage: PropTypes.number.isRequired,
    title: PropTypes.string,
    onSelect: PropTypes.func,
    disabled: PropTypes.bool,
  };

  _onSelect = (el) => {
    if (!this.props.disabled && this.props.onSelect) this.props.onSelect(el);
  }

  render() {
    const self = this;
    let selected = this.props.selected
    return (
      <TouchableOpacity
        testID={this.props.testID}
        style={[styles.container, this.props.style]}
        onPress={(el) => self._onSelect(el)}
        accessibilityTraits="button"
        accessibilityComponentType="button">
        <Image style={styles.image} source={selected ? this.props.selectedImage : this.props.image}>
          <Text style={[styles.text, selected ? this.props.selectedTextStyle : this.props.textStyle || {}]}>{this.props.title}</Text>
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
    backgroundColor: 'gray',
  },
  image: {
    height: 50,
    width:80,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
  },
});

