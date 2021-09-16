import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/ionicons'

import Feed from './screens/feed'
import CreatePost from './screens/createPost'

const Tab =createBottomTabNavigator();


const BottomTabNavigator = ()=>{
  return (
 
   <Tab.Navigator 
   screenOptions = {({route})=>({
     tabBarIcon :({focused,color,size})=>{
     let iconName ;
     if (route.name==='Feed'){
       iconName=focused
       ? 'book'
       : 'book-outline';
     }
    else if (route.name==='CreatePost'){
      iconName=focused
      ? 'create'
      : 'create-outline';
    }
    return <Ionicons name={iconName} size={size} color={color}/>
     }
   })}
   tabBarOptions={{
     activeTintColor:'tomoto',
     inactiveTintColor:'grey'
   }}
   >
   <Tab.Screen name="Feed" component={Feed}/>
   <Tab.Screen name="CreatePost" component={CreatePost}>
   </Tab.Navigator>
   
   
  );
}

export default BottomTabNavigator();
