import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import axiosInstance from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';

const MyPost = () => {
  const {profile} = useContext(AuthContext);
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log(profile);
    axiosInstance.get('/allpost').then(res => {
      console.log(res.data.posts);
      setPost(res.data.posts);
    });
  }, []);
  const postData = post.filter(item => {
    return item.user === profile.name;
  });
  console.log(postData);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',

              width: '100%',
            }}>
            {postData.map((data, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{paddingBottom: 2, width: '33%'}}>
                  <Image
                    source={{uri: data.postImage}}
                    style={{width: '100%', height: 150}}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyPost;
