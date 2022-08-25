import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ProfileBody, ProfileButtons} from '../screenComponents/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../screenComponents/BottomTabView';
import {AuthContext} from '../../../context/AuthContext';

const Profile = () => {
  const {profile} = useContext(AuthContext);

  let circuls = [];

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
          name={profile.name}
          accountName={profile.accountName}
          profileImage={profile.profileImage}
          followers={profile.followers}
          following={profile.following}
          post={profile.post}
        />

        <ProfileButtons
          id={0}
          name={profile.name}
          accountName={profile.accountName}
          profileImage={profile.profileImage}
        />
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
