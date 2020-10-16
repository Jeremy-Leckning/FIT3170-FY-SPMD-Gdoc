import React, { Component } from "react";
import { Text, Button } from "react-native-elements";
import { View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";
import Modal from "react-native-modal";
// import deepDiffer from "react-native/lib/deepDiffer";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/StyleSheet";

var diff = require("deep-diff");
const startTime = new Date();
const endTime = new Date();
endTime.setHours(endTime.getHours() + 1);

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      vehicleNumber: "ABC123",
      paymentMethod: "Visa-8378",
      totalPrice: 10,
      arrivingDate: new Date(),
      leavingDate: new Date(),
      parkingData: this.props.route.params.parkingData,
      parkingDistance: this.props.route.params.parkingDistance,
      currentSelectedParking: null,
      buttonColor: "white",
      date: new Date(),
      pickingArriving: false,
      pickingLeaving: false,
      datePickerMode: "date",
      showDatePicker: false,
    };
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.arrivingDate;
    if (this.state.pickingArriving) {
      this.setState({ arrivingDate: currentDate }, () => {
        if (this.state.leavingDate < this.state.arrivingDate) {
          this.setState({ leavingDate: this.state.arrivingDate });
        }
      });
    }
    if (this.state.pickingLeaving) {
      this.setState({ leavingDate: currentDate }, () => {
        if (this.state.leavingDate < this.state.arrivingDate) {
          this.setState({ arrivingDate: this.state.leavingDate });
        }
      });
    }
  };
  showMode = (currentMode) => {
    this.setState({ showDatePicker: true });
    this.setState({ datePickerMode: currentMode });
  };

  showDatepicker = (dateType) => {
    if (dateType == "Arriving") {
      this.setState({ pickingArriving: true });
    }
    if (dateType == "Leaving") {
      this.setState({ pickingLeaving: true });
    }
    this.showMode("date");
  };

  showTimepicker = () => {
    this.showMode("time");
  };

  closeTimePicker = () => {
    this.showMode("date");
    this.setState({ showDatePicker: false });
    this.setState({ pickingArriving: false, pickingLeaving: false });
    console.log("Arriving" + this.state.arrivingDate);
    console.log("Leaving" + this.state.leavingDate);
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  calculateDateDiff = () => {
    let start = this.state.arrivingDate;
    let end = this.state.leavingDate;
    let elapsed = end - start;
    console.log(elapsed);
    let difference = new Date(elapsed);

    // let diff_days = difference.getUTC();
    let diff_hours = difference.getUTCHours();
    let diff_mins = difference.getUTCMinutes();
    // if (diff_days == 0) {
    //   diff_days = "";
    // } else {
    //   diff_days = diff_days + "d ";
    // }
    return diff_hours + "h" + " " + diff_mins + "m";
  };
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white", padding: "3%" }}>
        {/* ----------------------------------- Parking Info  -----------------------------------*/}
        <ScrollView>
          {/* -------------------------------- Modal ----------------------------------------*/}
          <Modal backdropColor={"black"} isVisible={this.state.isModalVisible}>
            <View style={{ backgroundColor: "white" }}>
              <Text style={{ fontSize: "20px" }}>
                Here are your booking details
              </Text>
              <Text></Text>
              <Text style={{ fontSize: "20px" }}>
                Vehicle Number:
                {"\n"}
                {this.state.vehicleNumber}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Parking Name:
                {"\n"}
                {this.state.parkingData.title}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Parking Spot:
                {"\n"}
                {!this.state.currentSelectedParking
                  ? "-"
                  : this.state.currentSelectedParking.parkingNumber}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Payment Method: {"\n"}
                {this.state.paymentMethod}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Total Price:{"\n"} {this.state.totalPrice}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Booking Start Date Time: {"\n"}
                {this.state.arrivingDate.toLocaleString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour12: true,
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Booking End Date Time:{"\n"}{" "}
                {this.state.leavingDate.toLocaleString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour12: true,
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Parking Time:{"\n"} {this.calculateDateDiff()}
                {"\n"}
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Button title="Confirm" onPress={this.toggleModal} />
                <Button title="Cancel" onPress={this.toggleModal} />
              </View>
            </View>
          </Modal>
          <Modal backdropColor={"black"} isVisible={this.state.showDatePicker}>
            <View style={{ backgroundColor: "white" }}>
              <DateTimePicker
                minimumDate={new Date()}
                locale="en-GB"
                testID="dateTimePicker"
                value={
                  this.state.pickingArriving
                    ? this.state.arrivingDate
                    : this.state.leavingDate
                }
                mode={this.state.datePickerMode}
                is24Hour={true}
                display="default"
                onChange={this.onChange}
              />
              {this.state.datePickerMode == "date" ? (
                <Button onPress={this.showTimepicker} title="Next" />
              ) : (
                <Button onPress={this.closeTimePicker} title="Done" />
              )}
            </View>
          </Modal>
          <Text style={styles.parkingType}>
            {this.state.parkingData.parkingType}
          </Text>
          <View style={styles.spaceHolder} />

          <Text style={styles.title}>{this.state.parkingData.title}</Text>
          <Text style={styles.address}>{this.state.parkingData.address}</Text>

          <View style={styles.spaceHolder} />

          <View style={[styles.row_container, { alignItems: "center" }]}>
            <Image source={require("../assets/direction.png")} />
            <Text style={styles.distance}>{this.state.parkingDistance}km</Text>

            <View style={styles.horizontalSpaceHolder} />

            <Icon name="dollar" type="foundation" />
            <Text style={styles.price}>{this.state.parkingData.price}/hr</Text>
          </View>

          {/* ----------------------------------- Parking Spaces  -----------------------------------*/}
          <View style={styles.spaceHolder} />

          <Text style={styles.heading}>Space or Parking Lot</Text>
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <ScrollView horizontal>
            {this.state.parkingData.parkingSpaces.map((parkingData, index) => {
              return (
                <Button
                  key={index}
                  onPress={() => {
                    this.setState({
                      currentSelectedParking: parkingData,
                    });
                  }}
                  style={[
                    styles.parkinglot,
                    {
                      backgroundColor: !diff(
                        this.state.currentSelectedParking,
                        parkingData
                      )
                        ? "lightblue"
                        : "white",
                    },
                  ]}
                  type="clear"
                  title={
                    <Text>
                      {parkingData.parkingNumber}
                      {"\n"}
                      <Text style={{ fontWeight: "bold" }}>
                        {parkingData.availability}
                      </Text>
                    </Text>
                  }
                />
              );
            })}
          </ScrollView>
          {/* ----------------------------------- Parking Duration  -----------------------------------*/}
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <View style={styles.timeContainer}>
            <Button
              type="clear"
              onPress={() => {
                this.showDatepicker("Arriving");
              }}
              title={
                <Text style={{ fontWeight: "bold" }}>
                  Arriving{"\n"}
                  <Text style={{ fontWeight: "normal" }}>
                    {this.state.arrivingDate.toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    {"\n"}
                    {this.state.arrivingDate.toLocaleTimeString([], {
                      hour12: true,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </Text>
              }
            />
            <View style={{}}>
              <Text style={styles.duration}>{this.calculateDateDiff()}</Text>
            </View>
            <Button
              type="clear"
              onPress={() => {
                this.showDatepicker("Leaving");
              }}
              title={
                <Text style={{ fontWeight: "bold" }}>
                  Leaving{"\n"}
                  <Text style={{ fontWeight: "normal" }}>
                    {this.state.leavingDate.toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                    {"\n"}
                    {this.state.leavingDate.toLocaleTimeString([], {
                      hour12: true,
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </Text>
              }
            />
          </View>

          {/* ----------------------------------- Vehicle Info  -----------------------------------*/}
          <View style={styles.divider}>
            <View style={styles.spaceHolder} />
            <View style={styles.spaceHolder} />
            <Text style={styles.heading}>Vehicle</Text>
            <View style={styles.spaceHolder} />
            <View style={styles.spaceHolder} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.info}>Plate Number</Text>
              <Text style={styles.info}>B12UBGS</Text>
            </View>
            <View style={styles.spaceHolder} />
            <View style={styles.spaceHolder} />

            <View
              style={[
                styles.row_container,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.info}>Type</Text>
              <Text style={styles.info}>Sedan</Text>
            </View>

            <View style={styles.spaceHolder} />
            <View style={styles.spaceHolder} />
          </View>

          {/* ----------------------------------- Payment Method  -----------------------------------*/}
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />
          <View
            style={[styles.row_container, { justifyContent: "space-between" }]}
          >
            <Text style={styles.info}>Payment Method</Text>
            <Text style={styles.info}>Visa - 8378</Text>
          </View>
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          {/* ----------------------------------- Price  -----------------------------------*/}

          <View style={styles.divider} />
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <View
            style={[
              styles.row_container,
              ,
              { justifyContent: "space-between" },
            ]}
          >
            <Text style={styles.info}>Price</Text>
            <Text style={styles.info}>AUD 10.00</Text>
          </View>

          {/* ----------------------------------- Book Now  -----------------------------------*/}
          <View style={styles.spaceHolder} />
          <View style={styles.spaceHolder} />

          <Button
            buttonStyle={{
              borderRadius: 15,

              backgroundColor: "rgb(155,195,255)",
            }}
            onPress={this.toggleModal}
            title={
              <Text style={{ weightcolor: "black", fontWeight: "bold" }}>
                {this.state.arrivingDate.setTime(
                  this.state.arrivingDate.getTime() - 1000 * 60
                ) > new Date()
                  ? "Book Now"
                  : "Pay Now"}
              </Text>
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default BookingScreen;
