import React, { Component } from "react";
import { ImageBackground, Text, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import MapView, { AnimatedRegion } from "react-native-maps";
import GooglePlacesInput from "../components/GooglePlacesInput";

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
          />          
          <View style={{ width: '100%', position: "absolute", top: 50 }}>
            <SearchBar
              platform="ios"
              containerStyle={{backgroundColor: 'transparent'}}
              inputContainerStyle={{backgroundColor: 'white', borderColor: 'gray', borderRadius: 10}}
              inputStyle={{backgroundColor: 'white'}}
              leftIconContainerStyle={{backgroundColor: 'white'}}
              placeholder="Search"
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
