import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../src/components/screens/Home';
import Login from '../src/components/screens/Login';
import Profile from '../src/components/screens/Profile';
import FriendProfile from '../src/components/screenComponents/FriendProfile';
import EditProfile from '../src/components/screenComponents/EditProfile';
import NewPostSCreen from '../src/components/screenComponents/NewPostSCreen';
import Register from '../src/components/screens/Register';
import BottomTabView from './TabNavigator';
import Status from '../src/components/screenComponents/Status';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Bottom" component={BottomTabView}></Stack.Screen>
      <Stack.Screen name="Status" component={Status}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>

      <Stack.Screen name="NewPost" component={NewPostSCreen}></Stack.Screen>

      <Stack.Screen
        name="FriendProfile"
        component={FriendProfile}></Stack.Screen>
      <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppStack;
