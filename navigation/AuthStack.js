import {StyleSheet, Text, View} from 'react-native';
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
import SetProfile from '../src/components/screenComponents/SetProfile';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="SetProfile" component={SetProfile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
