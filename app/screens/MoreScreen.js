import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-navigation";
import GooglePlacesInput from "../components/GooglePlacesInput";
import { ListItem, Avatar, Icon } from "react-native-elements";
import MainMoreScreen from './MainMoreScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import SettingScreen from './SettingScreen';

const Stack = createStackNavigator();

class MoreScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name="More" component={MainMoreScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default MoreScreen;
