import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { SearchBar, Card } from "react-native-elements";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { SafeAreaView } from "react-navigation";
import carParkData from "../data/carparkLocation";

class ParkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      loading: true,
      currentMarker: null,
    };
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in kilometers
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in KM
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  updateSearch = (search) => {
    this.setState({ search });
  };

  success = (pos) => {
    this.setState(
      {
        initialRegion: {
          latitude: parseFloat(pos.coords.latitude),
          longitude: parseFloat(pos.coords.longitude),
          latitudeDelta: 5,
          longitudeDelta: 5,
        },
      },
      () => {
        this.setState({ loading: false });
      }
    );
  };

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, {
      maximumAge: 60000,
      timeout: 5000,
      enableHighAccuracy: true,
    });
  }

  goToInitialLocation() {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    console.log(initialRegion);
    this.mapView.animateToRegion(initialRegion, 2000);
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  render() {
    const { search } = this.state;
    if (!this.state.loading) {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={this.state.mapRegion}
            followUserLocation={true}
            ref={(ref) => (this.mapView = ref)}
            zoomEnabled={true}
            showsUserLocation={true}
            onMapReady={this.goToInitialLocation.bind(this)}
            initialRegion={this.state.initialRegion}
          >
            {carParkData.map((marker) => (
              <Marker
                onPress={() => {
                  console.log("selecting " + marker.title);
                  this.setState({ currentMarker: marker });
                }}
                onDeselect={() => {
                  this.setState({ currentMarker: null });
                }}
                coordinate={marker.coordinate}
                // title={marker.title}
                // description={marker.description}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    width: this.state.currentMarker == marker ? 200 : 100,
                    height: this.state.currentMarker == marker ? 60 : 30,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>{marker.title}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
          <View
            style={{
              alignSelf: "stretch",
              width: "100%",
              position: "absolute",
              bottom: 50,
            }}
          >
            {this.state.currentMarker && (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Details", {
                    parkingData: this.state.currentMarker,
                    parkingDistance:
                      Math.round(
                        this.getDistanceFromLatLonInKm(
                          this.state.initialRegion.latitude,
                          this.state.initialRegion.longitude,
                          this.state.currentMarker.coordinate.latitude,
                          this.state.currentMarker.coordinate.longitude
                        ) * 100
                      ) / 100,
                  });
                  console.log("clicking card");
                }}
              >
                <Card>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={styles.image}
                      source={require("../assets/sw1_carpark.jpg")}
                    />
                    <View>
                      <Card.Title>{this.state.currentMarker.title}</Card.Title>
                      <View
                        style={{
                          paddingLeft: 50,
                          // flexDirection: "row",
                        }}
                      >
                        <Text style={{ color: "green" }}>
                          {this.state.currentMarker.parkingRating}
                        </Text>
                        <Text></Text>
                        <Text>{this.state.currentMarker.parkingType}</Text>
                      </View>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ position: "absolute", top: 25 }}>
            <SearchBar
              platform="ios"
              containerStyle={{
                backgroundColor: "transparent",
                borderBottomColor: "transparent",
                borderTopColor: "transparent",
              }}
              inputContainerStyle={{
                backgroundColor: "white",
                borderColor: "gray",
                borderRadius: 10,
              }}
              // onChangeText={()=>{console.log("changing")}}
              inputStyle={{ backgroundColor: "white" }}
              leftIconContainerStyle={{ backgroundColor: "white" }}
              placeholder="Search"
              onFocus={() => {
                console.log("focus");
              }}
              onChangeText={this.updateSearch}
              value={search}
              lightTheme
              showCancel
              cancelButtonTitle="Cancel"
              round
            />
          </View>
        </View>
      );
    } else {
      return (
        <SafeAreaView>
          <Text style={{ textAlign: "center" }}>Loading...</Text>
        </SafeAreaView>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    height: 80,
    width: 100,
  },
});

export default ParkScreen;
