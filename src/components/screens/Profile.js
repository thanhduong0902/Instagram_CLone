import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView';
import {AuthContext} from '../../../context/auth';
import axiosInstance from '../../../apis/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from '@rneui/base';

const Profile = () => {
  const [profile, setProfile] = useState('');
  const user = useContext(AuthContext);
  console.log(user.user);
  let circuls = [];

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (!token) {
        return;
      }
      axiosInstance.get('/mypost').then(res => {
        setProfile(res.data.userPost);
      });
    });
  }, []);
  console.log(profile);

  for (let i = 0; i < 10; i++) {
    circuls.push(
      <View key={i}>
        {i === 0 ? (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </View>
        ) : (
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              marginHorizontal: 5,
            }}></View>
        )}
      </View>,
    );
  }

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View style={{width: '100%', padding: 10}}>
        <ProfileBody
          name="1"
          accountName="1"
          profileImage="1"
          followers="1"
          following="1"
          post="1"
        />

        <ProfileButtons id={0} name="1" accountName="1" profileImage="1" />
      </View>
      <View>
        <Text
          style={{color: 'black', padding: 10, letterSpacing: 1, fontSize: 14}}>
          Story Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {circuls}
        </ScrollView>
      </View>
      <BottomTabView />
    </View>
  );
};

export default Profile;
