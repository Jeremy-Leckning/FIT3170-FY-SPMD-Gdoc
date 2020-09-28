import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

class ProfileStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    );
  }
}

export default ProfileStack;
