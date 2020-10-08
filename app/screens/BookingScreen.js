import React, { Component } from "react";
import { Text, Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";
import Modal from "react-native-modal";
// import deepDiffer from "react-native/lib/deepDiffer";
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
      bookingStartDate: startTime,
      bookingEndDate: endTime,
      parkingData: this.props.route.params.parkingData,
      currentSelectedParking: null,
      buttonColor: "white",
    };
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white", padding: "3%" }}>
        {/* ----------------------------------- Parking Info  -----------------------------------*/}
        <View>
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
                {this.state.bookingStartDate.toLocaleString("en-GB")}
                {"\n"}
              </Text>
              <Text style={{ fontSize: "20px" }}>
                Booking End Date Time:{"\n"}{" "}
                {this.state.bookingEndDate.toLocaleString("en-GB")}
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

          <Text
            style={{
              fontSize: 12,
              color: "gray",
              fontWeight: "500",
              paddingVertical: "1%",
            }}
          >
            {this.state.parkingData.parkingType}
          </Text>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", paddingVertical: "1%" }}
          >
            {this.state.parkingData.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              fontWeight: "500",
              paddingVertical: "1%",
            }}
          >
            {this.state.parkingData.address}
          </Text>
          <View style={{ flexDirection: "row", paddingVertical: "1%" }}>
            <Icon
              style={{ paddingHorizontal: "2%" }}
              name="location-arrow"
              type="font-awesome"
            />
            <Text style={{ paddingVertical: "1%" }}>Parking Distance</Text>
            <Icon
              style={{ paddingHorizontal: "2%" }}
              name="dollar"
              type="foundation"
            />
            <Text style={{ paddingVertical: "1%" }}>
              {this.state.parkingData.price}/hr
            </Text>
          </View>

          {/* ----------------------------------- Parking Spaces  -----------------------------------*/}

          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Space or Parking Lot
          </Text>
          <View
            style={{
              backgroundColor: "rgb(255,248,230)",
              padding: "1%",
              marginTop: "2%",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#FFCE49",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                color: "#000",
                padding: "2%",
              }}
            >
              Today we have x lot available, don't forget to select before
              booking
            </Text>
          </View>
          <ScrollView horizontal style={{ paddingVertical: "4%" }}>
            {this.state.parkingData.parkingSpaces.map((parkingData, index) => {
              return (
                <Button
                  key={index}
                  onPress={() => {
                    this.setState({
                      currentSelectedParking: parkingData,
                    });
                  }}
                  style={{
                    backgroundColor: !diff(
                      this.state.currentSelectedParking,
                      parkingData
                    )
                      ? "lightblue"
                      : "white",
                    padding: 5,
                    margin: 5,
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: "gray",
                  }}
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "gray",
              borderWidth: 1,
              borderLeftWidth: 0,
              borderRightWidth: 0,
            }}
          >
            <Button
              style={{ paddingVertical: "5%", paddingHorizontal: "5%" }}
              type="clear"
              title={
                <Text style={{ fontWeight: "bold" }}>
                  Arriving{"\n"}
                  <Text style={{ fontWeight: "normal" }}>
                    {this.state.bookingStartDate.toLocaleDateString("en-GB")}
                    {"\n"}
                    {this.state.bookingStartDate.toLocaleTimeString()}
                  </Text>
                </Text>
              }
            />
            <View
              style={{
                paddingTop: "5%",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "rgb(19, 111, 209)",
                  borderColor: "rgb(19, 111, 209)",
                  borderRadius: 15,
                  borderWidth: 1,
                  overflow: "hidden",
                  padding: "2%",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                2h 3m
              </Text>
            </View>
            <Button
              style={{ paddingVertical: "5%", paddingHorizontal: "5%" }}
              type="clear"
              title={
                <Text style={{ fontWeight: "bold" }}>
                  Leaving{"\n"}
                  <Text style={{ fontWeight: "normal" }}>
                    {this.state.bookingStartDate.toLocaleDateString("en-GB")}
                    {"\n"}
                    {this.state.bookingEndDate.toLocaleTimeString()}
                  </Text>
                </Text>
              }
            />
          </View>
          {/* ----------------------------------- Vehicle Info  -----------------------------------*/}
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={{
                paddingHorizontal: "2%",
                paddingVertical: "1%",
                fontWeight: "bold",
              }}
            >
              Vehicle
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: "2%",
                paddingVertical: "3%",
              }}
            >
              <Text style={{ textAlign: "left" }}>Plate Number</Text>
              <Text style={{ textAlign: "left" }}>B12UBGS</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: "2%",
                paddingVertical: "3%",
              }}
            >
              <Text style={{ textAlign: "left" }}>Type</Text>
              <Text style={{ textAlign: "left" }}>Sedan</Text>
            </View>
          </View>

          {/* ----------------------------------- Payment Method  -----------------------------------*/}

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: "5%",
            }}
          >
            <Text style={{ paddingHorizontal: "2%" }}>Payment Method</Text>
            <Text style={{ paddingHorizontal: "2%" }}>Visa - 8378</Text>
          </View>

          {/* ----------------------------------- Price  -----------------------------------*/}

          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: "5%",
            }}
          >
            <Text style={{ paddingHorizontal: "2%" }}>Price</Text>
            <Text style={{ paddingHorizontal: "2%" }}>AUD 10.00</Text>
          </View>

          {/* ----------------------------------- Book Now  -----------------------------------*/}

          <Button
            style={{ padding: "5%" }}
            buttonStyle={{
              borderRadius: 15,

              backgroundColor: "rgb(155,195,255)",
            }}
            onPress={this.toggleModal}
            title={
              <Text style={{ weightcolor: "black", fontWeight: "bold" }}>
                Book now
              </Text>
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default BookingScreen;
