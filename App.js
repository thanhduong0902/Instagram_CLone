import React, {Component, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './src/components/screens/Home';
// import Search from './src/components/screens/Search';
// import Reels from './src/components/screens/Reels';
// import Activity from './src/components/screens/Activity';
// import Profile from './src/components/screens/Profile';
// import Status from './src/components/screenComponents/Status';
// import FriendProfile from './src/components/screenComponents/FriendProfile';
// import EditProfile from './src/components/screenComponents/EditProfile';
// import NewPostSCreen from './src/components/screenComponents/NewPostSCreen';
// import Login from './src/components/screens/Login';
// import Register from './src/components/screens/Register';
import {AuthContext, AuthProvider} from './context/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axiosInstance from './apis/axios';
// import {ActivityIndicator} from 'react-native';
// import AppNav from './navigation/AppNav';
import AuthStack from './navigation/AuthStack';
import AppNav from './navigation/AppNav';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   AsyncStorage.getItem('token').then(token => {
  //     if (!token) {
  //       return;
  //     }
  //     axiosInstance
  //       .get('/me', {
  //         headers: {
  //           authorization: 'Bearer ' + token,
  //         },
  //       })
  //       .then(res => {
  //         setUser(res.data.username);
  //         setTimeout(() => {
  //           setLoading(false);
  //         }, 1000);
  //       });
  //   });
  // }, [user]);

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
