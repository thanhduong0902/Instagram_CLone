import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const Status = ({route, navigation}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);
  const [progress, setProgrss] = useState(new Animated.Value(0));
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 3,
          width: '95%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 18,
        }}>
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 12,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={route.params.image}
            style={{
              borderRadius: 100,
              backgroundColor: 'orange',
              resizeMode: 'cover',
              width: '92%',
              height: '92%',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: 'white', fontSize: 10, paddingLeft: 10}}>
            {route.params.name}
          </Text>
          <TouchableOpacity>
            <Ionic name="close" style={{fontSize: 20, color: 'white'}} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={route.params.image}
        style={{
          position: 'absolute',
          width: '100%',
          height: 600,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        <TextInput
          placeholder="Send Message"
          placeholderTextColor="white"
          style={{
            borderColor: 'white',
            borderRadius: 75,
            width: '85%',
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 20,
            color: 'white',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="navigation" style={{fontSize: 30, color: 'white'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Status;
