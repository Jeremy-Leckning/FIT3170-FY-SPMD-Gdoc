import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MoreScreen from './app/screens/MoreScreen';
import ParkScreen from './app/screens/ParkScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';

export default function App(){
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="ParkScreen"
        component={ParkScreen}
        options={{
          tabBarLabel: 'Park',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="parking" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Feather name="more-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}