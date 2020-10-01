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

class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ marginLeft: "5%", marginRight: "8%" }}>
        <ScrollView>
          <Image source={require("../assets/senayan.png")} />

          <View>
            <View style={styles.row_container}>
              <Text
                style={{
                  marginTop: 15,
                  color: "grey",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Parking type
              </Text>

              <Image
                style={{ marginTop: 15, marginLeft: "auto" }}
                source={require("../assets/Rating.png")}
              />
            </View>

            <Text
              style={{
                fontSize: 24,
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              Parking Name
            </Text>
            <Text
              style={{
                marginTop: 3,
                fontSize: 20,
                color: "grey",
              }}
            >
              Parking Location
            </Text>
          </View>

          <View style={styles.spaceHolder} />

          <View style={styles.row_container}>
            <Image
              style={{ marginLeft: "1%" }}
              source={require("../assets/direction.png")}
            />

            <Text
              style={{
                fontSize: 16,
                marginLeft: "2%",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              Distance m
            </Text>

            <Text
              style={{
                fontSize: 16,
                marginLeft: "10%",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              Rp
            </Text>

            <Text
              style={{
                fontSize: 16,
                marginLeft: "3%",
                color: "darkblue",
              }}
            >
              Price/Hours
            </Text>

            <Image
              style={{ marginLeft: "auto" }}
              source={require("../assets/Star.png")}
            />
          </View>

          <View style={styles.spaceHolder} />

          <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
            ADDRESS
          </Text>

          <View style={styles.row_container}>
            <Text style={{ color: "darkblue", width: "60%", fontSize: 16 }}>
              Jl. Asia Afrika No.Lot. 19, RT.1/RW.3, Gelora, Tanah Abang, Kota
              Jakarta Pusat.
            </Text>

            <Image
              style={{
                height: 60,
                width: 60,
                marginLeft: "auto",
              }}
              source={require("../assets/Maps.png")}
            />
          </View>

          <Text style={{ color: "blue", fontSize: 16, marginTop: "3%" }}>
            Direction
          </Text>

          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
            OPERATION
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: "darkblue",
              fontWeight: "bold",
            }}
          >
            Open • 24 Hours
          </Text>

          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
            GATE IN/OUT
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "blue", fontSize: 16 }}> North </Text>
            <Text style={{ color: "blue", fontSize: 16 }}> South </Text>
            <Text style={{ color: "blue", fontSize: 16 }}> East </Text>
            <Text style={{ color: "blue", fontSize: 16 }}> West </Text>
          </View>

          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <TouchableOpacity
            style={styles.button}
            title="Next"
            onPress={() => {
              this.props.navigation.navigate("Book");
            }}
          >
            <Text
              style={{
                color: "darkblue",
                fontWeight: "bold",
                marginTop: "2.5%",
                fontSize: 18,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row_container: {
    flexDirection: "row",
  },

  spaceHolder: {
    marginTop: 25,
  },

  button: {
    alignItems: "center",

    backgroundColor: "rgb(155,195,255)",
    width: "60%",
    height: "5%",
    borderRadius: 50,
    marginBottom: 30,
    marginLeft: "15%",
  },
});

export default DetailScreen;
