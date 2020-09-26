import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from "react-native";
import { SearchBar, Card } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import MapView, { AnimatedRegion, MarkerAnimated } from "react-native-maps";
import GooglePlacesInput from "../components/GooglePlacesInput";
import { Marker } from "react-native-maps";
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
                onSelect={() => {
                  console.log("selecting " + marker.title);
                  this.setState({ currentMarker: marker });
                }}
                onDeselect={() => {
                  this.setState({ currentMarker: null });
                }}
                coordinate={marker.coordinate}
                title={marker.title}
                description={marker.description}
              />
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
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details');console.log("clicking card")}}>
                <Card>
                  <Card.Title>{this.state.currentMarker.title}</Card.Title>
                </Card>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ position: "absolute", top: 50 }}>
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
      return <Text>Loading...</Text>;
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
});

export default ParkScreen;
