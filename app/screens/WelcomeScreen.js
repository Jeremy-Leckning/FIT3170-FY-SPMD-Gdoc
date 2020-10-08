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
import { StackActions, NavigationActions } from "@react-navigation/native";

class ProgressBar extends Component {
  render() {
    const {
      height,
      borderColor,
      borderWidth,
      borderRadius,
      barColor,
      fillColor,
    } = this.props;
    return (
      <View
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          flex: 1,
          flexDirection: "row",
          height,
        }}
      >
        <View
          style={{ flex: 1, borderColor, borderWidth, borderRadius }}
        ></View>
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  height: 10,
  borderColor: "#000",
  borderWidth: 2,
  borderRadius: 4,
  barColor: "tomato",
  fillColor: "rgba(0,0,0,.5)",
  duration: 100,
};

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("Preference");
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: "rgb(122, 155, 239)",
          flex: 1,
        }}
      >
        <View style={{ paddingTop: "140%", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "rgb(10, 36, 99)",
            }}
          >
            MON
          </Text>

          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "rgb(102, 102, 102)",
            }}
          >
            PARK
          </Text>

          <ProgressBar></ProgressBar>
        </View>
      </SafeAreaView>
    );
  }
}

export default WelcomeScreen;
