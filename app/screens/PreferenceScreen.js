import React, { Component } from "react";
import {
  Button,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  View,
  flexDirection,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

class PreferenceScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ margin: "10%" }}>Preference Screen </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Park")}
          >
            <Text> Next </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "rgb(155,195,255)",
    borderRadius: 50,
    width: "50%",
    height: 40,
  },
});

export default PreferenceScreen;
