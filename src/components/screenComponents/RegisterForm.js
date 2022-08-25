import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';
import axiosInstance from '../../../apis/axios';
const RegisterForm = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const TostMessange = () => {
    ToastAndroid.show('Sign up successfully', ToastAndroid.SHORT);
  };
  const handleSubmit = async () => {
    try {
      const respone = await axiosInstance.post('/signup', {
        username: userName,
        password: password,
      });
      setErr(respone.data.message);
      if (respone.data.message === 'User created successfully') {
        TostMessange();
        navigation.navigate('SetProfile', {
          accountName: userName,
        });
      }
    } catch (err) {}
  };

  return (
    <View>
      <View style={styles.inputField}>
        <TextInput
          placeholder="Phone, username or email"
          style={{
            height: 50,
            paddingLeft: 20,
            fontSize: 12,
          }}
          onChangeText={newText => setUserName(newText)}
        />
      </View>

      <View style={styles.inputField}>
        <TextInput
          placeholder="Passworld"
          secureTextEntry={true}
          style={{
            height: 50,
            paddingLeft: 20,

            fontSize: 12,
          }}
          onChangeText={newText => setPassword(newText)}
        />
      </View>
      {err === 'User existed' ? (
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Ionic
            name="close-circle-outline"
            style={{fontSize: 24, color: 'red'}}
          />
          <Text style={{color: 'red'}}>{err}</Text>
        </View>
      ) : err === 'Password need min 8 characters' ? (
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Ionic
            name="close-circle-outline"
            style={{fontSize: 24, color: 'red'}}
          />
          <Text style={{color: 'red'}}>{err}</Text>
        </View>
      ) : err === 'User created successfully' ? (
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Ionic
            name="checkmark-circle-outline"
            style={{fontSize: 24, color: 'green'}}
          />
          <Text style={{color: 'green'}}>{err}</Text>
          <View style={{paddingVertical: 10}}>
            <Pressable
              onPress={() => {
                setErr('');
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: '#2196F3',
                  fontWeight: 'bold',
                }}>
                Go to Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      ) : null}

      <TouchableOpacity onPress={handleSubmit}>
        <LinearGradient
          colors={[
            'rgb(243,91,52)',
            'rgb(250,192,93)',
            'rgb(252,30,29)',
            'rgb(250,192,93)',
            'rgb(204,5,130)',
            'rgb(204,5,130)',
            'rgb(96,35,214)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            padding: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Lobster-Regular',
              color: 'white',
              fontSize: 24,
            }}>
            Sign up
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },
  wrapper: {
    marginTop: 80,
  },
});

export default RegisterForm;
