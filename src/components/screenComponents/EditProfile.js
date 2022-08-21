import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;
  console.log(route.params.profileImage, route.params.name);
  const TostMessange = () => {
    ToastAndroid.show('Edited Successfully', ToastAndroid.SHORT);
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
            TostMessange();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 36, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={profileImage}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text
          style={{
            color: '#3493D9',
          }}>
          Change Profile Photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text style={{color: 'black', opacity: 0.5}}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
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

export default EditProfile;
