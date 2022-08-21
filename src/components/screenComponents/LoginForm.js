import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import axiosInstance, {updateToken} from '../../../apis/axios';
import {AuthContext} from '../../../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginForm = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const userCtx = useContext(AuthContext);

  const handleSubmit = async () => {
    const respone = await axiosInstance.post('/signin', {
      username: userName,
      password: password,
    });

    setErr(respone.data.message);
    if (err === 'Logged in successfully') {
      console.log(respone.data);
      userCtx.setUser(respone.data.username);
      updateToken(respone.data.token);
      AsyncStorage.setItem('token', respone.data.token);
    }
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
      <View style={{alignItems: 'flex-end', marginBottom: 30}}>
        <Text style={{color: '#68B0F5'}}>Forgot Password?</Text>
      </View>
      {err === 'Invalid Username or Password' && (
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
      )}
      <Button title="Log in" onPress={handleSubmit} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{color: '#68B0F5'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
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

export default LoginForm;
