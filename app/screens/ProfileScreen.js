import React, { Component } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Avatar, Accessory } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.image}>
            <Avatar
              size="xlarge"
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
              }}
            />

            <Text style={{ marginTop: 5, fontSize: 18 }}> Placeholder </Text>

            <View>
              <TouchableOpacity
                style={styles.button}
                title="log out"
                onPress={() => console.log("Logout Button Pressed")}
              >
                <Text style={styles.whiteText}> Log out </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.contentSeparators} />
            <Text style={styles.text}> Setting 1 </Text>
            <View style={styles.lineSeparators} />
            <Text style={styles.text}> Payment Setting </Text>
            <View style={styles.lineSeparators} />
            <Text style={styles.text}> History </Text>
            <View style={styles.contentSeparators} />
            <View style={styles.spaceHolder} />
            <View style={styles.contentSeparators} />
            <Text style={styles.text}> Customization </Text>
            <View style={styles.lineSeparators} />
            <Text style={styles.text}> Language </Text>
            <View style={styles.lineSeparators} />
            <Text style={styles.text}> Vehicle Settings </Text>
            <View style={styles.contentSeparators} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1.5,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
  },

  container: {
    flex: 2,
  },

  text: {
    marginLeft: "10%",
    fontSize: 18,
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

  whiteText: {
    color: "white",
    fontSize: 20,
  },
});

export default ProfileScreen;
