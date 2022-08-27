import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axiosInstance, {getPost} from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const Post = () => {
  const navigation = useNavigation();
  const [postInfo, setPostInfo] = useState([]);
  const {profile} = useContext(AuthContext);
  //console.log('profile Post', profile);
  const [like, setLike] = useState(false);
  useEffect(() => {
    axiosInstance
      .get('/allpost')
      .then(res => setPostInfo(res.data.posts.reverse()));
  }, [postInfo]);

  return (
    <SafeAreaView>
      {postInfo.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {data.user !== profile.name ? (
                  <>
                    <Image
                      source={{uri: `${data.postPersonImage}`}}
                      style={{width: 40, height: 40, borderRadius: 100}}
                    />

                    <View
                      style={{
                        paddingLeft: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        {data.user}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <Image
                      source={{uri: profile.profileImage}}
                      style={{width: 40, height: 40, borderRadius: 100}}
                    />

                    <View
                      style={{
                        paddingLeft: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        {profile.name}
                      </Text>
                    </View>
                  </>
                )}
              </View>
              <Feather
                name="more-vertical"
                style={{fontSize: 20, color: 'black'}}
              />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: `${data.postImage}`,
                }}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{fontSize: 20, paddingRight: 10, color: 'black'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{fontSize: 20, paddingRight: 10, color: 'black'}}
                  />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{fontSize: 20, color: 'black'}} />
            </View>
            <View style={{paddingHorizontal: 15}}>
              {!data.likes && !like && null}
              {!data.likes && like && (
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Liked by you
                </Text>
              )}
              {!data.likes ? null : (
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {like
                    ? `Liked by you and ${data.likes} others `
                    : `Liked by ${data.likes}`}
                </Text>
              )}
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontWeight: '700',

                    color: 'black',
                  }}>
                  {data.user}
                </Text>
                <Text style={{color: 'black'}}> {data.caption}</Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('Comment', {
                    data: data,
                  });
                }}>
                <Text style={{paddingVertical: 2}}>View All Comments</Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default Post;
