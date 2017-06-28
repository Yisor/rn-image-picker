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
    }
  }

  _onPress = () => {

  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon.Button name="ios-aperture" backgroundColor="#3b5998" onPress={this.choosePic.bind(this)}>
          选择
        </Icon.Button>
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        <Switch />
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', }}>
          <Button
            containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, borderWidth: 0.5, backgroundColor: 'white' }}
            style={{ fontSize: 20, color: 'green' }}
            onPress={this._onPress()}>
            <Text>111</Text>
            <Text>222</Text>
          </Button>
          <Button
            containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, borderWidth: 0.5, backgroundColor: 'white' }}
            style={{ fontSize: 20, color: 'green' }}
            onPress={this._onPress()}>
            <Text>111111111</Text>
          </Button>
        </View>

        <ButtonProvider>
          <Button
            containerStyle={{ padding: 10, height: 45, overflow: 'hidden', borderRadius: 4, borderWidth: 0.5, backgroundColor: 'white' }}
            style={{ fontSize: 20, color: 'green' }}
            onPress={this._onPress()}>
            <Text>111</Text>
            <Text>222</Text>
          </Button>
        </ButtonProvider>

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
