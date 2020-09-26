import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
// import MoreScreen from "../screens/MoreScreen";
import MoreStack from "./MoreStack";
import ParkStack from "./ParkStack";

const Tab = createBottomTabNavigator();

function MyTabs() {
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
            <MaterialCommunityIcons name="parking" color={color} size={size} />
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

export default MyTabs;
