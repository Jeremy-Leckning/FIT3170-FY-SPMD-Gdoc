import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyTabs from "./app/routes/BottomTabNavigator";
import MainStack from "./app/routes/MainStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
