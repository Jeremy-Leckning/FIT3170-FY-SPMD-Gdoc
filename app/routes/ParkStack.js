import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ParkScreen from "../screens/ParkScreen";
import DetailScreen from "../screens/DetailScreen";
import BookingScreen from "../screens/BookingScreen";

const Stack = createStackNavigator();

class ParkStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}  name="Park" component={ParkScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Book" component={BookingScreen} />

      </Stack.Navigator>
    );
  }
}

export default ParkStack;
