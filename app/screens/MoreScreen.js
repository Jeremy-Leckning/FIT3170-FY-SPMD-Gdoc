import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { ListItem, Icon } from "react-native-elements";

class MainMoreScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ListItem
          bottomDivider
          onPress={() => {
            console.log("pressed account");
            this.props.navigation.navigate("Profile");
          }}
        >
          <Icon name="account-circle" />
          <ListItem.Content>
            <ListItem.Title>Profile</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => {
            console.log("pressed settings");
            this.props.navigation.navigate("Settings");
          }}
        >
          <Icon name="settings" />
          <ListItem.Content>
            <ListItem.Title>Settings</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </SafeAreaView>
    );
  }
}

export default MainMoreScreen;
