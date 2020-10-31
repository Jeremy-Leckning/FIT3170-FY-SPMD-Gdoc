import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ListItem
            bottomDivider
            onPress={() => this.props.navigation.navigate("Payment Settings")}
          >
            <Icon name="settings" />
            <ListItem.Content>
              <ListItem.Title>Payment Settings</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem
            bottomDivider
            onPress={() => this.props.navigation.navigate("Language Settings")}
          >
            <Icon name="settings" />
            <ListItem.Content>
              <ListItem.Title>Language Settings</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem
            bottomDivider
            onPress={() => this.props.navigation.navigate("Vehicle Settings")}
          >
            <Icon name="settings" />
            <ListItem.Content>
              <ListItem.Title>Vehicle Settings</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: "5%",
    fontSize: 18,
    fontWeight: "bold",
  },
  lineSeparators: {
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    width: "90%",
    marginLeft: "5%",
    marginVertical: 20,
  },
  contentSeparators: {
    borderBottomColor: "#C0C0C0",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
    width: "100%",
    marginVertical: 20,
  },
  spaceHolder: {
    marginVertical: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1e90ff",
    padding: 10,
    width: 250,
    borderRadius: 50,
    marginTop: 10,
  },
});

export default SettingScreen;
