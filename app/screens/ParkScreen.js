import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import MapView from 'react-native-maps';

class ParkScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  updateSearch = (search) => {
    this.setState({ search });
  };
  
  render(){
    const { search } = this.state;
    return (
      <View style={styles.container}>
          <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
      </View>
    )
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