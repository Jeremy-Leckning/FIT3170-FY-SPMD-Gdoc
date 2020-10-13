import React, { Component } from "react";
import {
  Platform,
  Text,
  View,
  flexDirection,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import ProgressBarAnimated from "react-native-progress-bar-animated";

// Ignore yellowbox warnings for loading bar
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  "Warning: componentWillReceiveProps has been renamed, and is not recommended for use.",
  "Can't perform a React state update on an unmounted component.",
]);

class Bar extends Component {
  render() {
    const { height, borderColor, borderWidth, borderRadius } = this.props;
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

Bar.defaultProps = {
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
    this.animation = new Animated.Value(0);
    this.state = {
      progressBarvalue: 0,
      loadingTime: 3000,
    };
  }

  componentDidMount() {
    this.onAnimation();
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("Preference");
    }, this.state.loadingTime);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  onAnimation = () => {
    this.animation.addListener(({ value }) => {
      this.setState({ progressBarvalue: parseInt(value, 10) });
    });
    Animated.timing(this.animation, {
      toValue: 100,
      duration: this.state.loadingTime - 500,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const barWidth = Dimensions.get("screen").width - 30;
    return (
      <SafeAreaView style={styles.container}>
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

          <Bar></Bar>
          {/* Reference for loading bar: https://www.npmjs.com/package/react-native-progress-bar-animated */}
          <View>
            <Animated.View />
            <ProgressBarAnimated
              width={barWidth}
              value={this.state.progressBarvalue}
              backgroundColorOnComplete="#6CC644"
            />
            <Animated.Text style={{ textAlign: "center" }}>
              {this.state.progressBarvalue}%
            </Animated.Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "rgb(122, 155, 239)", flex: 1 },
});

export default WelcomeScreen;
