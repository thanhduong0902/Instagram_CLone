import {View, Text} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import axiosInstance from '../../../apis/axios';
import {AuthContext} from '../../../context/AuthContext';

const MyPost = () => {
  const {profile} = useContext(AuthContext);
  const [post, setPost] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/mypost', {
        user: profile.name,
      })
      .then(res => {
        console.log(res.data);
        setPost(res.data.userPost);
      });
  }, []);

  return (
    <View>
      {post.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <TouchableOpacity style={{paddingBottom: 2, width: '33%'}}>
              <Image
                source={{
                  uri: `https://soshi.manuth.life/data/soshi/pictures/taeyeon/magazines/2019-october-cosmopolitan/7kjLv8Rk_o.jpg`,
                }}
                style={{width: '100%', height: 150}}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default MyPost;
