import React, { Component } from "react";
import { Platform, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";
import Modal from "react-native-modal";
// import deepDiffer from "react-native/lib/deepDiffer";
import DateTimePicker from "@react-native-community/datetimepicker";

class FavouriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      mode: "date",
      show: false,
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ show: true });
    this.setState({ date: currentDate });
  };
  showMode = (currentMode) => {
    this.setState({ show: true });
    this.setState({ mode: currentMode });
  };

  showDatepicker = () => {
    this.showMode("date");
  };

  showTimepicker = () => {
    this.showMode("time");
  };

  closeTimePicker = () => {
    this.showMode("date");
    this.setState({ show: false });
    console.log(this.state.date);
  };

  render() {
    return (
      <SafeAreaView>
        <View>
          <Button onPress={this.showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={this.showTimepicker} title="Show time picker!" />
        </View>
        {this.state.show && (
          <View>
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={true}
              display="default"
              onChange={this.onChange}
            />
            {this.state.mode == "date" ? (
              <Button onPress={this.showTimepicker} title="Next" />
            ) : (
              <Button onPress={this.closeTimePicker} title="Done" />
            )}
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default FavouriteScreen;
