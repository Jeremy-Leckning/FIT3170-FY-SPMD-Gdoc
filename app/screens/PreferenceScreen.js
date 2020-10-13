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
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

class PreferenceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 0,
      language: null,
      colorBlind: null,
      paymentMethod: null,
      notification: null,
      selected: null,
    };
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
          {/* ----------- FONT SIZE A ------------------- */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Font size</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.A_button,
                  {
                    backgroundColor:
                      this.state.fontSize === 1 ? "green" : "darkgrey",
                  },
                ]}
                onPress={() => this.setState({ fontSize: 1 })}
              >
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>A</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.A_button,
                  {
                    backgroundColor:
                      this.state.fontSize === 2 ? "green" : "darkgrey",
                  },
                ]}
                onPress={() => this.setState({ fontSize: 2 })}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}> A </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.A_button,
                  {
                    backgroundColor:
                      this.state.fontSize === 3 ? "green" : "darkgrey",
                  },
                ]}
                onPress={() => this.setState({ fontSize: 3 })}
              >
                <Text style={{ fontSize: 26, fontWeight: "bold" }}> A </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.A_button,
                  {
                    backgroundColor:
                      this.state.fontSize === 4 ? "green" : "darkgrey",
                  },
                ]}
                onPress={() => this.setState({ fontSize: 4 })}
              >
                <Text style={{ fontSize: 32, fontWeight: "bold" }}> A </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.spaceHolder} />

          {/* ------------------------- LANGUAGE ----------------------- */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Language</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.language === "english" ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ language: "english" })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  English
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.language === "chinese" ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ language: "chinese" })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}> 中文 </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.language === "japanese" ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ language: "japanese" })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>日本語</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.spaceHolder} />

          {/*-------------------------- COLOR BLIND ---------------------------------- */}

          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Color Blind
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.colorBlind === 1 ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ colorBlind: 1 })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.colorBlind === 0 ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ colorBlind: 0 })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}> No </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.spaceHolder} />

          {/*-------------------------- PAYMENT METHOD ---------------------------------- */}

          {/* <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Payment method
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button_preference_longer,
                  {
                    backgroundColor:
                      this.state.paymentMethod === "credit card"
                        ? "green"
                        : "white",
                  },
                ]}
                onPress={() => this.setState({ paymentMethod: "credit card" })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Credit Card
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button_preference_longer,
                  {
                    backgroundColor:
                      this.state.paymentMethod === "cash" ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ paymentMethod: "cash" })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}> Cash </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.spaceHolder} /> */}

          {/*-------------------------- NOTIFICATION ---------------------------------- */}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Notification
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: 10,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.notification === 1 ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ notification: 1 })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>On</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button_preference,
                  {
                    backgroundColor:
                      this.state.notification === 0 ? "green" : "white",
                  },
                ]}
                onPress={() => this.setState({ notification: 0 })}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}> Off </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.spaceHolder} />
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
              onPress={() => {
                this.props.navigation.navigate("MyTabs");
                this.props.navigation.reset({
                  index: 0,
                  routes: [{ name: "MyTabs" }],
                });
              }}
            >
              <Text>Next</Text>
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

  A_button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    backgroundColor: "darkgrey",
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

  button_preference_longer: {
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: 110,
    backgroundColor: "white",
  },
});

export default PreferenceScreen;
