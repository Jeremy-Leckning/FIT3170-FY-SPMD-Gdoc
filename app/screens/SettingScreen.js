import React, { Component } from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>
              <Text
                onPress={() =>
                  this.props.navigation.navigate("Payment Settings")
                }
              >
                Payment Settings
                {"\n"}
                {"\n"}
              </Text>

              <Text onPress={() => this.props.navigation.navigate("History")}>
                History
                {"\n"}
                {"\n"}
              </Text>

              <Text
                onPress={() =>
                  this.props.navigation.navigate("Language Settings")
                }
              >
                Language Settings
                {"\n"}
                {"\n"}
              </Text>

              <Text
                onPress={() =>
                  this.props.navigation.navigate("Vehicle Settings")
                }
              >
                Vehicle Settings
                {"\n"}
                {"\n"}
              </Text>
            </Text>

            {/* <View style={styles.lineSeparators} />
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
            <View style={styles.contentSeparators} /> */}
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
