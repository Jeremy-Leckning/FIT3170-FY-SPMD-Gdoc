import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-navigation";
import GooglePlacesInput from "../components/GooglePlacesInput";
import { ListItem, Avatar, Icon } from "react-native-elements";

class MainMoreScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render(){
    return(
      <SafeAreaView>
        <ListItem bottomDivider onPress={() => {console.log("pressed account"); this.props.navigation.navigate('Account')}}>
          <Icon name = 'account-circle'/>
          <ListItem.Content>
            <ListItem.Title>Account</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider onPress={() => {console.log("pressed settings"); this.props.navigation.navigate('Settings')}}>
          <Icon name = 'settings'/>
          <ListItem.Content>
            <ListItem.Title>Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default MainMoreScreen;
