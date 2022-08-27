import {View, Text, Image, TextInput, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {AuthContext} from '../../../context/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Comment = ({route, navigation}) => {
  const {profile} = useContext(AuthContext);
  const [height, setHeight] = useState(750);
  const [comment, setComment] = useState('');
  const [updateCmt, setUpdateCmt] = useState(false);
  const [cmt, setCmt] = useState(route.params.data.comments);
  console.log(cmt);
  return (
    <View
      style={{
        position: 'relative',
      }}>
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
          Comment
        </Text>
        <Feather
          name="check"
          style={{fontSize: 24, color: 'blue'}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      {cmt.map((data, index) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              padding: 10,
            }}
            key={index}>
            <Image
              source={{
                uri: data.byUserImage,
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                backgroundColor: 'orange',
                marginRight: 10,
              }}
            />
            <Text
              style={{fontWeight: 'bold', color: 'black', paddingRight: 10}}>
              {data.byUser}:
            </Text>
            <Text style={{color: 'black'}}>{data.comment}</Text>
          </View>
        );
      })}
      {updateCmt ? (
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            padding: 10,
          }}>
          <Image
            source={{
              uri: profile.profileImage,
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: 'orange',
              marginRight: 10,
            }}
          />
          <Text style={{fontWeight: 'bold', color: 'black', paddingRight: 10}}>
            {profile.name}:
          </Text>
          <Text style={{color: 'black'}}>{comment}</Text>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          left: 10,
          top: height,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '75%',
          }}>
          <Image
            source={{
              uri: profile.profileImage,
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: 'orange',
              marginRight: 10,
            }}
          />

          <TextInput
            style={{}}
            onFocus={() => setHeight(550)}
            placeholder="Add a comment"
            onChangeText={newText => {
              setComment(newText);
            }}
            onSubmitEditing={() => {
              setHeight(750);
              setUpdateCmt(true);
            }}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo
            name="emoji-happy"
            style={{fontSize: 18, color: 'green', marginRight: 10}}
          />
          <Entypo
            name="emoji-neutral"
            style={{fontSize: 18, color: 'purple', marginRight: 10}}
          />
          <Entypo name="emoji-sad" style={{fontSize: 18, color: 'red'}} />
        </View>
      </View>
    </View>
  );
};

export default Comment;
