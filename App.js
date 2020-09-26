import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MyTabs from "./app/routes/BottomTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
