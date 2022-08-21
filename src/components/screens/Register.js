import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LoginForm from '../screenComponents/LoginForm';
import RegisterForm from '../screenComponents/RegisterForm';

const Register = () => {
  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image
          source={require('../../storage/images/logo.png')}
          style={{width: 200, height: 200}}
          resizeMode="contain"
        />
      </View>
      <RegisterForm />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    margin: 60,
  },
});

export default Register;
