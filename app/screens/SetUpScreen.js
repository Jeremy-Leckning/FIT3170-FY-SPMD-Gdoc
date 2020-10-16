import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

class SetUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 0,
      language: null,
      colorBlind: null,
      paymentMethod: null,
      notification: null,
    };
  }
  navigateToNextPage() {
    this.props.navigation.navigate("MyTabs", {
      preference: {
        fontSize: this.props.route.params.preference.fontSize,
        language: this.props.route.params.preference.language,
        colorBlind: this.props.route.params.preference.colorBlind,
        paymentMethod: this.props.route.params.preference.paymentMethod,
        notification: this.props.route.params.preference.notification,
      },
    });
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: "MyTabs" }],
    });
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "lightblue", flex: 1 }}>
        <View style={{ marginHorizontal: "5%", flex: 1 }}>
          <View style={{ alignItems: "center", marginTop: "10%" }}>
            <Text
              style={{
                color: "rgb(10, 36, 99)",
                fontWeight: "bold",
              }}
            >
              Finish your setup
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: "space-around" }}>
            {/*-------------------------- Payment Method ---------------------------------- */}
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Add Payment Method
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity style={styles.button_preference}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_preference}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Later
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*--------------------------Vehicle Detail---------------------------------- */}

            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Add Vehicle Details
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingTop: 10,
                }}
              >
                <TouchableOpacity style={styles.button_preference}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_preference}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Later
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/*-------------------------- FINISH BUTTON ---------------------------------- */}

          <View
            style={{
              alignItems: "center",
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.navigateToNextPage()}
            >
              <Text>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(155,195,255)",
    borderRadius: 50,
    width: "80%",
    height: "10%",
    height: 40,
  },

  spaceHolder: {
    paddingTop: 25,
  },

  button_preference: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 90,
    backgroundColor: "white",
  },
});

export default SetUpScreen;
