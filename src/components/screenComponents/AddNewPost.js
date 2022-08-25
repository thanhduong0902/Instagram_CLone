import {View, Text, Image, TextInput, Button, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {Divider} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axiosInstance, {uploadFile} from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const AddNewPost = () => {
  const navigation = useNavigation();
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const {profile} = useContext(AuthContext);
  const handleUploadImage = async () => {
    const result = await launchImageLibrary();

    setImage(result.assets[0].uri);
  };

  const handleUploadPost = async () => {
    console.log(image);
    const respone = await axiosInstance.post('/createpost', {
      user: profile.name,
      postPersonImage: profile.profileImage,
      caption: caption,
      postImage: image,
    });
    navigation.navigate('Bottom');
  };

  return (
    <View>
      <View
        style={{
          margin: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Pressable onPress={handleUploadImage}>
          <Image
            source={
              image === ''
                ? require('../../storage/images/update_image.png')
                : {uri: image}
            }
            style={{
              width: 100,
              height: 100,
            }}
          />
        </Pressable>
        <View style={{flex: 1, marginLeft: 10}}>
          <TextInput
            placeholder="Write a caption..."
            style={{color: 'black'}}
            multiline={true}
            onChangeText={newText => setCaption(newText)}></TextInput>
        </View>
      </View>
      <Divider width={0.2} orientation="vertical" />

      <Button title="Share" onPress={handleUploadPost}></Button>
    </View>
  );
};
export default AddNewPost;
