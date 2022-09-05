import React, {Component, useContext, useEffect} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';

import Stories from '../screenComponents/Stories';
import {useNavigation} from '@react-navigation/native';
import Post from '../screenComponents/Post';
import axiosInstance from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const navigation = useNavigation();
  const {setProfile, userToken} = useContext(AuthContext);

  
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <FontAwesome
          name="plus-square-o"
          style={{fontSize: 24}}
          onPress={() => {
            navigation.push('NewPost');
          }}
        />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Instagram
        </Text>
        <Feather name="navigation" style={{fontSize: 24}} />
      </View>
      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
