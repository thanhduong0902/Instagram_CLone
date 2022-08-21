import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'your Story',
      image: require('../../storage/images/userProfile.png'),
    },
    {
      id: 0,
      name: 'Cardi B',
      image: require('../../storage/images/profile1.png'),
    },

    {
      id: 0,
      name: 'Tom',
      image: require('../../storage/images/profile2.png'),
    },
    {
      id: 0,
      name: 'Alex',
      image: require('../../storage/images/profile3.png'),
    },
    {
      id: 0,
      name: 'Baby',
      image: require('../../storage/images/profile4.png'),
    },
    {
      id: 0,
      name: 'Groot',
      image: require('../../storage/images/profile5.png'),
    },
  ];
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
              console.log('status');
              navigation.push('Status', {
                name: data.name,
                image: data.image,
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
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
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
