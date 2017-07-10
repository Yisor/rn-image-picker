/*
 *  @File   : ButtonProvider
 *  @Author : lslin
 *  @Date   : 2017-7-5 15:51:30
 *  @Last Modified   : 2017-7-5 15:51:30
 */
import React, { PureComponent, PropTypes, Children } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

export default class ButtonProvider extends PureComponent {

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
            style={[styles.iconView, this.props.iconStyle, (el.props.name || el.key) == selected ? this.props.selectedIconStyle || el.props.selectedIconStyle || {} : {}]}
            onPress={() => !self.props.locked && self.onSelect(el)}
            onLongPress={() => self.onSelect(el)}
            activeOpacity={el.props.pressOpacity}>
            {selected == (el.props.name || el.key) ? React.cloneElement(el, { selected: true, style: [el.props.style, this.props.selectedStyle, el.props.selectedStyle] }) : el}
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: 8,
    borderWidth: 2,
  }
});
