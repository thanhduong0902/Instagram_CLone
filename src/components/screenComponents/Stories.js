import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import axiosInstance from '../../../apis/axios';
import {launchCamera} from 'react-native-image-picker';
import {AuthContext} from '../../../context/AuthContext';
const Stories = () => {
  const navigation = useNavigation();
  const [storyInfo, setStoryInfo] = useState([]);

  const {profile} = useContext(AuthContext);

  useEffect(() => {
    console.log('profile Story', profile.profileImage);
    axiosInstance.get('/stories').then(res => setStoryInfo(res.data.stories));
  }, []);

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.push('Status', {
                name: data.name,
                image: data.id === 1 ? profile.profileImage : data.image,
              });
            }}>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {data.id === 1 ? (
                  <Image
                    source={{
                      uri: profile.profileImage,
                    }}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                  />
                ) : (
                  <Image
                    source={{uri: `${data.image}`}}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                  />
                )}
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
