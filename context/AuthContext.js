import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {createContext, useEffect, useState} from 'react';
import axiosInstance from '../apis/axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [err, setErr] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [profile, setProfile] = useState(null);
  const login = (username, password) => {
    setIsLoading(true);
    axiosInstance
      .post('/signin', {
        username: username,
        password: password,
      })
      .then(res => {
        console.log(res.data);
        console.log(res.data.message);
        setErr(res.data.message);
        if (res.data.message === 'Logged in successfully') {
          let userInfo = res.data;
          setUsername(userInfo.user.username);
          setUserInfo(userInfo);
          setUserToken(userInfo.token);
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          AsyncStorage.setItem('token', userInfo.token);
          console.log('username', userInfo.user.username);
          console.log('message', userInfo.message);
          console.log('user token', userInfo.token);
        }
      });

    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('token');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);

      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('token');
      let userProfile = await AsyncStorage.getItem('profile');

      userInfo = JSON.parse(userInfo);
      userProfile = JSON.parse(userProfile);
      console.log('userProfile', userProfile);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
        setProfile(userProfile);
      }
      setIsLoading(false);
    } catch (e) {
      console.log('Error');
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isLoading,
        userToken,
        err,
        profile,
        setProfile,
        userInfo,
        username,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
