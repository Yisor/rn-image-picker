/*
 *  @File   : ImageButtonProvider
 *  @Author : lslin
 *  @Date   : 2017-7-5 15:55:22
 *  @Last Modified   : 2017-7-5 15:55:22
 */
import React, { PureComponent, PropTypes, Children } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

export default class ImageButtonProvider extends PureComponent {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    style: View.propTypes.style,
    selected: PropTypes.any,
    textStyle: Text.propTypes.style,
    selectedTextStyle: Text.propTypes.style,
    image: PropTypes.number.isRequired,
    selectedImage: PropTypes.number.isRequired,
    title: PropTypes.string,
    onSelect: PropTypes.func,
  };

  onSelect(el) {
    if (el.props.onSelect) {
      el.props.onSelect(el);
    } else if (this.props.onSelect) {
      this.props.onSelect(el);
    }
  }

  render() {
    const self = this;
    let selected = this.props.selected
    if (!selected) {
      React.Children.forEach(this.props.children.filter(c => c), el => {
        if (!selected || el.props.initial) {
          selected = el.props.name || el.key;
        }
      });
    }
    return (
      <View style={[styles.tabbarView, this.props.style]}>
        {React.Children.map(this.props.children.filter(c => c), (el) =>
          <TouchableOpacity key={el.props.name + "touch"}
            style={[styles.iconView]}
            onPress={() => !self.props.locked && self.onSelect(el)}
            onLongPress={() => self.onSelect(el)}>
          
              {selected == (el.props.name || el.key) ? React.cloneElement(el, { selected: true, style: [el.props.style, this.props.selectedTextStyle, el.props.selectedTextStyle] }) : el}
           

          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbarView: {
    height: 50,
    opacity: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

