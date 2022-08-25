import {View, Text, ActivityIndicator, Image} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../src/components/screens/Login';
const Stack = createNativeStackNavigator();
const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('../src/storage/images/waiting-bg.jpg')}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      ) : userToken !== null ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNav;
