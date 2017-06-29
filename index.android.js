/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
  View,
  Text,
  Image,
  ToastAndroid,
  AppRegistry
} from 'react-native';

var ImagePicker = require('react-native-image-picker');
import Icon from 'react-native-vector-icons/Ionicons';
import { Switch } from './Switch';
import Button from './Button';
import ButtonProvider from './ButtonProvider';
import ImageButton from './ImageButton';
const btnNormal = require('./images/btn_bg_normal.png');
const btnSelect = require('./images/btn_bg_selected.png');

const options = {
  quality: 0.8,
  maxWidth: 500,
  maxHeight: 500,
  title: null,
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '从相册上传',
  cameraType: 'back',
  mediaType: 'photo',
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

export default class Awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      selected: false,
      borderColor: '#00baff',
      page: 'second',
      iconValue: 'hello',
    }
  }

  _onSelect = (item) => {
    this.setState({ page: item.props.name, iconValue: item.key });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon.Button name="ios-aperture" backgroundColor="#3b5998" onPress={this.choosePic.bind(this)}>
          选择
        </Icon.Button>
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        <Text>{this.state.page}</Text>


        <ButtonProvider
          selected={this.state.page}
          style={{ marginTop: 20 }}
          selectedStyle={{ color: 'red' }}
          selectedIconStyle={{ borderWidth: 2, borderColor: 'red' }}
          onSelect={item => this._onSelect(item)}
        >
          <Text name="first">First</Text>
          <Text name="second">Second</Text>
          <Text name="third">Third</Text>
          <Text name="fourth">Fourth</Text>
        </ButtonProvider>

        <ImageButton
          selected={true}
          selectedStyle={{ color: 'red' }}
          onSelect={item => { console.log('点击了') }}
          sourceNormal={btnNormal}
          sourceSelected={btnSelect}
          text={'测试'}
        >

        </ImageButton>
      </View >
    )
  }

  choosePic = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('response' + response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source
        });
      }
    })
  }
}
const styles = StyleSheet.create({
  cameraBtn: {
    padding: 5,
    height: 50,
    width: 100,
    alignItems: 'center',
  },
  uploadAvatar: {
    height: 100,
    width: 100,
    alignItems: 'center',
    marginTop: 20,
  }
});

AppRegistry.registerComponent('Awesome', () => Awesome);
