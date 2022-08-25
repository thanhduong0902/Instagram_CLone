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
import LinearGradient from 'react-native-linear-gradient';
import axiosInstance, {updateToken} from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginForm = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {err} = useContext(AuthContext);
  const {login} = useContext(AuthContext);

  // const handleSubmit = async () => {
  //   const respone = await axiosInstance.post('/signin', {
  //     username: userName,
  //     password: password,
  //   });

  //   setErr(respone.data.message);
  //   if (err === 'Logged in successfully') {
  //     console.log(respone.data);
  //     userCtx.setUser(respone.data.username);
  //     updateToken(respone.data.token);
  //     AsyncStorage.setItem('token', respone.data.token);
  //   }
  // };
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
          onChangeText={newText => setUsername(newText)}
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
      <TouchableOpacity
        onPress={() => {
          login(username, password);
        }}>
        <LinearGradient
          colors={[
            'rgb(243,91,52)',
            'rgb(250,192,93)',
            'rgb(252,30,29)',
            'rgb(250,192,93)',
            'rgb(204,5,130)',
            'rgb(204,5,130)',
            'rgb(96,35,214)',
            'rgb(66,93,232)',
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
            Sign in
          </Text>
        </LinearGradient>
      </TouchableOpacity>
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
