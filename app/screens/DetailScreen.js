import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-navigation";
import GooglePlacesInput from "../components/GooglePlacesInput";
import { ListItem, Avatar, Icon } from "react-native-elements";

class DetailScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render(){
    return(
      <View><Text>Account Screen</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default DetailScreen;
