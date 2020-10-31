import React, { Component } from "react";
import { Platform, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";
import Modal from "react-native-modal";
// import deepDiffer from "react-native/lib/deepDiffer";
import DateTimePicker from "@react-native-community/datetimepicker";

class FavouriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: "date",
      show: false,
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Favourites</Text>
      </SafeAreaView>
    );
  }
}

export default FavouriteScreen;
