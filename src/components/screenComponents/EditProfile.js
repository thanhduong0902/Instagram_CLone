import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import axiosInstance from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';

const EditProfile = ({navigation}) => {
  const {profile, setProfile} = useContext(AuthContext);

  const [newName, setNewName] = useState('');
  const [photo, setPhoto] = useState(profile.profileImage);
  const [update, setUpdate] = useState(false);
  const TostMessange = () => {
    ToastAndroid.show('Edited Successfully', ToastAndroid.SHORT);
  };
  const handleUploadImage = async () => {
    const result = await launchImageLibrary();
    setPhoto(result.assets[0].uri);
    setUpdate(true);
  };
  const EditProfile = async () => {
    console.log('profile edit', profile);
    const respone = await axiosInstance.put('/profile', {
      name: newName,
      accountName: profile.accountName,
      profileImage: photo,
    });
    console.log('edit', respone.data.profile);
    setProfile(respone.data.profile);
    setUpdate(false);
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
          EditProfile
        </Text>
        <TouchableOpacity
          onPress={() => {
            EditProfile();
            TostMessange();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 36, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        {update ? (
          <Image
            source={{uri: photo}}
            style={{width: 80, height: 80, borderRadius: 100}}
          />
        ) : (
          <Image
            source={{uri: profile.profileImage}}
            style={{width: 80, height: 80, borderRadius: 100}}
          />
        )}
        <Pressable onPress={handleUploadImage}>
          <Text
            style={{
              color: '#3493D9',
            }}>
            Change Profile Photo
          </Text>
        </Pressable>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text style={{color: 'black', opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={profile.name}
            onChangeText={newText => setNewName(newText)}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text style={{color: 'black', opacity: 0.5}}>Username</Text>
          <TextInput
            placeholder="accountname"
            defaultValue={profile.accountName}
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

export default EditProfile;
