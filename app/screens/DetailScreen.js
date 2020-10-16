import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  StatusBar,
  View,
  flexDirection,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";
import { Text, Button } from "react-native-elements";

import { ScrollView } from "react-native-gesture-handler";
// import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/StyleSheet";

class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingData: this.props.route.params.parkingData,
      parkingDistance: this.props.route.params.parkingDistance,
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
      <SafeAreaView style={{ padding: "3%" }}>
        {imageParking}
        <View>
          <View style={styles.spaceHolder} />
          <View
            style={[styles.row_container, { justifyContent: "space-between" }]}
          >
            <Text style={styles.parkingType}>
              {this.state.parkingData.parkingType}
            </Text>
            <View style={styles.rating}>
              <Text style={{ fontWeight: "bold", color: "darkblue" }}>
                {this.state.parkingData.parkingRating}
              </Text>
            </View>
          </View>

          <Text style={styles.title}>{this.state.parkingData.title}</Text>
          <Text style={styles.location}>{this.state.parkingData.location}</Text>
        </View>
        <View style={styles.spaceHolder} />
        <View style={[styles.row_container, { alignItems: "center" }]}>
          <Image source={require("../assets/direction.png")} />

          <Text style={styles.distance}>{this.state.parkingDistance}km</Text>
          <View style={styles.horizontalSpaceHolder} />

          <Icon name="dollar" type="foundation" />

          <Text style={styles.price}>{this.state.parkingData.price}/hr</Text>

          <View style={{ marginLeft: "auto" }}>
            <Icon
              name={this.state.favorite ? "star" : "star-o"}
              type="font-awesome"
              color={this.state.favorite ? "#F44336" : "rgb(50, 50, 50)"}
              size={30}
              onPress={() => this.setState({ favorite: !this.state.favorite })}
            />
          </View>
        </View>
        <View style={styles.spaceHolder} />
        <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
          ADDRESS
        </Text>
        <View
          style={[styles.row_container, { justifyContent: "space-between" }]}
        >
          <Text style={styles.address}>{this.state.parkingData.address}</Text>
          <Image style={styles.map} source={require("../assets/Maps.png")} />
        </View>

        <View style={styles.spaceHolder} />
        <View style={styles.spaceHolder} />
        <Text style={{ color: "grey", fontSize: 14, marginBottom: "4%" }}>
          OPERATION
        </Text>
        <Text style={styles.operation}>Open • 24 Hours</Text>
        <View style={styles.spaceHolder} />
        <View style={styles.spaceHolder} />

        <Button
          style={{ padding: "5%" }}
          buttonStyle={{
            borderRadius: 15,

            backgroundColor: "rgb(155,195,255)",
          }}
          onPress={() => {
            this.props.navigation.navigate("Book", {
              parkingData: this.props.route.params.parkingData,
              parkingDistance: this.props.route.params.parkingDistance,
            });
          }}
          title={
            <Text style={{ weightcolor: "black", fontWeight: "bold" }}>
              Next
            </Text>
          }
        />
      </SafeAreaView>
    );
  }
}

export default DetailScreen;
