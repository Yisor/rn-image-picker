import React, { PureComponent } from 'react';
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
import ImageButtonProvider from './ImageButtonProvider';
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

export default class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      selected: true,
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

        <ButtonProvider
          selected={this.state.page}
          style={{ marginTop: 20 }}
          selectedStyle={{ color: 'red' }}
          selectedIconStyle={{ borderWidth: 2, borderColor: 'red' }}
          onSelect={item => this._onSelect(item)}
        >
          <Text name="first">First</Text>
          <Text name="second">Second</Text>
        </ButtonProvider>

        <ImageButtonProvider
          style={{ marginTop: 20 }}
          selected={this.state.page}
          textStyle={{ color: 'red' }}
          selectedTextStyle={{ color: 'blue' }}
          image={require('./images/btn_bg_normal.png')}
          selectedImage={require('./images/btn_bg_selected.png')}
          onSelect={item => this._onSelect(item)}>
          <Text name="first">1</Text>
          <Text name="second">2</Text>
        </ImageButtonProvider>

        <View style={{ flex: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>

          <ImageButton
            style={{ height: 50 }}
            selected={this.state.selected}
            textStyle={{ color: 'blue' }}
            selectedTextStyle={{ color: 'red' }}
            image={require('./images/btn_bg_normal.png')}
            selectedImage={require('./images/btn_bg_selected.png')}
            onSelect={item => { this.setState({ selected: !this.state.selected }); }}
            title='ImageButton1'
          />

          <ImageButton
            style={{ height: 50 }}
            selected={false}
            textStyle={{ color: 'blue' }}
            selectedTextStyle={{ color: 'red' }}
            image={require('./images/btn_bg_normal.png')}
            selectedImage={require('./images/btn_bg_selected.png')}
            title='测试2'
          />

        </View>


        <View style={{ height: 50, width: 80, alignItems: 'center',  justifyContent: 'center', }} >
          <Image style={styles.image} source={require('./images/btn_bg_normal.png')} />
        </View>
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
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});


