import {View, Text, Image, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {Divider} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FormikPost from './FormikPost';

const AddNewPost = () => {
  const [caption, setCaption] = useState('');
  return (
    <View>
      <View
        style={{
          margin: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../storage/images/update_image.png')}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <View style={{flex: 1, marginLeft: 10}}>
          <TextInput
            placeholder="Write a caption..."
            style={{color: 'black'}}
            multiline={true}
            onChangeText={newText => setCaption(newText)}></TextInput>
        </View>
      </View>
      <Divider width={0.2} orientation="vertical" />

      <Button title="Share"></Button>
    </View>
  );
};
export default AddNewPost;
