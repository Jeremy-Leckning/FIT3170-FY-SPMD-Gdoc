import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkScreen from "../screens/ParkScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

class ParkStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Park" component={ParkScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

export default ParkStack;
