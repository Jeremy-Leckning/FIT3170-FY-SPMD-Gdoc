import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

class DetailStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

export default DetailStack;
