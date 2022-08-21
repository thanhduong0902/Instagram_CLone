import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'David',
      postPersonImage: require('../../storage/images/userProfile.png'),
      postImage: require('../../storage/images/post1.jpg'),
      likes: 666,
      isLiked: false,
      caption: 'How you like that😍',
      comments: [
        {user: 'th rock', comment: 'Amazing😍'},
        {
          user: 'yoona',
          comment: 'SNSD😊',
        },
      ],
    },
    {
      postTitle: 'thoa.smile',
      postPersonImage: require('../../storage/images/profile2.png'),
      postImage: require('../../storage/images/post2.jpg'),
      likes: 789,
      isLiked: false,
      caption: 'How you like that',
      comments: [
        {user: 'th rock', comment: 'Amazing'},
        
      ],
    },
    {
      postTitle: 'Scott',
      postPersonImage: require('../../storage/images/profile3.png'),
      postImage: require('../../storage/images/post3.jpg'),
      likes: 123,
      isLiked: true,
      caption: 'How you like that',
      comments: [
        {user: 'th rock', comment: 'Amazing'},
        {
          user: 'yoona',
          comment: 'SNSD',
        },
      ],
    },
    {
      postTitle: 'blackpink.official',
      postPersonImage: require('../../storage/images/profile4.png'),
      postImage: require('../../storage/images/post4.jpg'),
      likes: 561,
      isLiked: false,
      caption: 'How you like that',
      comments: [
        
      ],
    },
    {
      postTitle: 'Kulture',
      postPersonImage: require('../../storage/images/profile5.png'),
      postImage: require('../../storage/images/post5.jpg'),
      likes: 2324,
      isLiked: false,
      caption: 'How you like that',
      comments: [
        {user: 'th rock', comment: 'Amazing'},
        {
          user: 'yoona',
          comment: 'SNSD😍',
        },
      ],
    },
    {
      postTitle: 'CardiB',
      postPersonImage: require('../../storage/images/userProfile.png'),
      postImage: require('../../storage/images/post6.jpg'),
      likes: 666,
      isLiked: false,
      caption: 'How you like that',
      comments: [
        {user: 'th rock', comment: 'Amazing😍'},
        {
          user: 'yoona',
          comment: 'SNSD😍',
        },
      ],
    },
    {
      postTitle: 'Nicki',
      postPersonImage: require('../../storage/images/userProfile.png'),
      postImage: require('../../storage/images/post7.jpg'),
      likes: 666,
      isLiked: false,
      caption: 'How you like that',
      comments: [
        {user: 'th rock', comment: 'Amazing'},
        {
          user: 'yoona',
          comment: 'SNSD',
        },
      ],
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
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
                <Image
                  source={data.postPersonImage}
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
                    {data.postTitle}
                  </Text>
                </View>
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
                source={data.postImage}
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
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Liked by {like ? 'you and ' : ''}
                {data.likes} others
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontWeight: '700',

                    color: 'black',
                  }}>
                  {data.postTitle}
                </Text>
                <Text style={{color: 'black'}}> {data.caption}</Text>
              </View>
              <Text style={{paddingVertical: 2}}>View All Comments</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput placeholder="Add a comment" />
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
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 18, color: 'red'}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
