import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import React, { Component } from "react";
import MoreStack from "./MoreStack";
import ParkStack from "./ParkStack";
import ProfileStack from "./ProfileStack";
import DetailStack from "./DetailStack";
import HistoryScreen from "../screens/HistoryScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import { StackActions, NavigationActions } from "react-navigation";

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Welcome"
        tabBarOptions={{
          activeTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="ParkStack"
          component={ParkStack}
          options={{
            tabBarLabel: "Park",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="parking"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarLabel: "My Booking",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            tabBarLabel: "Favourites",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="star-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="MoreStack"
          component={MoreStack}
          options={{
            tabBarLabel: "More",
            tabBarIcon: ({ color, size }) => (
              <Feather name="more-horizontal" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabNavigator;
