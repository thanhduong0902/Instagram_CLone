import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import axiosInstance from '../../../apis/axios';
const RegisterForm = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const handleSubmit = async () => {
    try {
      const respone = await axiosInstance.post('/signup', {
        username: userName,
        password: password,
      });
      setErr(respone.data.message);
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

      <Button title="Sign up" onPress={handleSubmit} />
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
