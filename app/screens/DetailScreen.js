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

class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingData: this.props.route.params.parkingData,
      favorite: false,
      image: require("../assets/senayan.png"),
      imageSW1: require("../assets/sw1_carpark.jpg"),
      imageWestOne: require("../assets/WestOne_parking.jpg"),
    };
  }

  render() {
    let imageParking;
    if (this.state.parkingData.title == "SW1 Carpark") {
      imageParking = (
        <Image style={styles.image} source={this.state.imageSW1} />
      );
    } else {
      imageParking = (
        <Image style={styles.image} source={this.state.imageWestOne} />
      );
    }
    return (
      <SafeAreaView style={{ marginLeft: "5%", marginRight: "8%" }}>
        <ScrollView>
          {imageParking}
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
                {this.state.parkingData.parkingType}
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
              {this.state.parkingData.title}
            </Text>
            <Text
              style={{
                marginTop: 3,
                fontSize: 20,
                color: "grey",
              }}
            >
              {this.state.parkingData.location}
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
              $
            </Text>

            <Text
              style={{
                fontSize: 16,
                marginLeft: "3%",
                color: "darkblue",
              }}
            >
              {this.state.parkingData.price}
            </Text>

            {/* <Image
              style={{ marginLeft: "auto" }}
              source={require("../assets/Star.png")}
            /> */}

            <View style={{ marginLeft: "auto" }}>
              <Icon
                name={this.state.favorite ? "star" : "star-o"}
                color={this.state.favorite ? "#F44336" : "rgb(50, 50, 50)"}
                size={30}
                onPress={() =>
                  this.setState({ favorite: !this.state.favorite })
                }
              />
            </View>
          </View>
          <View style={styles.spaceHolder} />
          <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
            ADDRESS
          </Text>
          <View style={styles.row_container}>
            <Text style={{ color: "darkblue", width: "60%", fontSize: 16 }}>
              {this.state.parkingData.address}
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
          {/* <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
            GATE IN/OUT
          </Text> */}
          {/* <View
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
          </View> */}
          <TouchableOpacity
            style={styles.button}
            title="Next"
            onPress={() => {
              this.props.navigation.navigate("Book", {
                parkingData: this.props.route.params.parkingData,
              });
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
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />
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
    marginBottom: "20%",
    marginLeft: "15%",
  },

  image: {
    marginTop: "2%",
    height: "20%",
    width: "100%",
  },
});

export default DetailScreen;
