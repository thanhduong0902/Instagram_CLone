import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import axiosInstance from '../../../apis/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetProfile = ({route, navigation}) => {
  const [name, setName] = useState('');
  const accountName = route.params.accountName;
  const [image, setImage] = useState('');

  const handleUploadImage = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    setImage(result.assets[0].uri);
  };
  const SetProfile = async () => {
    const respone = await axiosInstance.put('/profile', {
      name: name,
      accountName: accountName,
      profileImage: image,
    });
  };

  const TostMessange = () => {
    ToastAndroid.show('Set up Successfully', ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 36, color: 'black'}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
          Set up Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            SetProfile();
            TostMessange();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 36, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Pressable onPress={handleUploadImage}>
          <Image
            source={
              image === ''
                ? require('../../storage/images/update_image.png')
                : {uri: image}
            }
            style={{width: 80, height: 80, borderRadius: 100}}
          />
        </Pressable>
        <Text
          style={{
            color: '#3493D9',
          }}>
          Upload Profile Photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text style={{color: 'black', opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            onChangeText={newText => setName(newText)}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: 'black', opacity: 0.5}}>AccountName</Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional Account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Personal information setting
        </Text>
      </View>
    </View>
  );
};

export default SetProfile;
