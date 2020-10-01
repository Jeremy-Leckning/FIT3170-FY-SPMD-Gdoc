import React, { Component } from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-navigation";

class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Details Screen</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate("Book");
          }}
          title="Next"
        />
      </SafeAreaView>
    );
  }
}

export default DetailScreen;
