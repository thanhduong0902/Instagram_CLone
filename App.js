import React, {Component, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Search from './src/components/screens/Search';
import Reels from './src/components/screens/Reels';
import Activity from './src/components/screens/Activity';
import Profile from './src/components/screens/Profile';
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile';
import EditProfile from './src/components/screenComponents/EditProfile';
import NewPostSCreen from './src/components/screenComponents/NewPostSCreen';
import Login from './src/components/screens/Login';
import Register from './src/components/screens/Register';
import {AuthContext} from './context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './apis/axios';
import {ActivityIndicator} from 'react-native';
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

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        loading: loading,
        setLoading: setLoading,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {loading ? (
            <Stack.Screen
              name="Loading"
              component={ActivityIndicator}></Stack.Screen>
          ) : !user ? (
            <>
              <Stack.Screen name="Login" component={Login}></Stack.Screen>
              <Stack.Screen name="Register" component={Register}></Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen
                name="Bottom"
                component={BottomTabScreen}></Stack.Screen>
              <Stack.Screen name="Status" component={Status}></Stack.Screen>
              <Stack.Screen name="Home" component={Home}></Stack.Screen>

              <Stack.Screen
                name="NewPost"
                component={NewPostSCreen}></Stack.Screen>

              <Stack.Screen
                name="FriendProfile"
                component={FriendProfile}></Stack.Screen>
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}></Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
