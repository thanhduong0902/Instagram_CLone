import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();
  const Posts = () => {
    return (
      <View>
        <Text>Posts</Text>
      </View>
    );
  };
  const Videos = () => {
    return (
      <View>
        <Text>Posts</Text>
      </View>
    );
  };
  const Tags = () => {
    return (
      <View>
        <Text>Posts</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
        tabBarIcon: ({focused, colour}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Videos') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            colour = focused ? 'black' : 'gray';
          }

          return <Ionic name={iconName} color={colour} size={22} />;
        },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomTabView;
