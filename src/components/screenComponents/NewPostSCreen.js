import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AddNewPost from './AddNewPost';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const NewPostSCreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <FontAwesome
          name="arrow-left"
          style={{fontSize: 24, color: 'black'}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
            color: 'black',
          }}>
          Add New Post
        </Text>
        <Feather
          name="check"
          style={{fontSize: 24, color: 'blue'}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostSCreen;
