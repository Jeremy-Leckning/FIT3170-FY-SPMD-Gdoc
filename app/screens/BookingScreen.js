import React, { Component } from "react";
import { Text, Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";

class BookingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white", padding: 10 }}>
        {/* ----------------------------------- Parking Info  -----------------------------------*/}
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            fontWeight: "500",
            paddingVertical: 5,
          }}
        >
          Parking Type
        </Text>
        <Text style={{ fontSize: 22, fontWeight: "bold", paddingVertical: 5 }}>
          Parking Name
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            fontWeight: "500",
            paddingVertical: 5,
          }}
        >
          Parking Location
        </Text>
        <View style={{ flexDirection: "row", paddingVertical: 5 }}>
          <Icon
            style={{ paddingHorizontal: 10 }}
            name="location-arrow"
            type="font-awesome"
          />
          <Text style={{ paddingVertical: 3 }}>Parking Distance</Text>
          <Icon
            style={{ paddingHorizontal: 10 }}
            name="dollar"
            type="foundation"
          />
          <Text style={{ paddingVertical: 3 }}>Parking Price</Text>
        </View>

        {/* ----------------------------------- Parking Spaces  -----------------------------------*/}

        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Space or Parking Lot
        </Text>
        <View
          style={{
            backgroundColor: "rgb(255,248,230)",
            padding: 5,
            marginTop: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#FFCE49",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "#000",
              padding: 10,
            }}
          >
            Today we have x lot available, don't forget to select before booking
          </Text>
        </View>
        <ScrollView horizontal style={{ paddingVertical: 20 }}>
          <Button
            style={{
              padding: 5,
              margin: 5,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "gray",
            }}
            type="clear"
            title={
              <Text>
                P1{"\n"}
                <Text style={{ fontWeight: "bold" }}>23/40</Text>
              </Text>
            }
          />
          <Button
            style={{
              padding: 5,
              margin: 5,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "gray",
            }}
            type="clear"
            title={
              <Text>
                P1{"\n"}
                <Text style={{ fontWeight: "bold" }}>23/40</Text>
              </Text>
            }
          />
          <Button
            style={{
              padding: 5,
              margin: 5,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "gray",
            }}
            type="clear"
            title={
              <Text>
                P1{"\n"}
                <Text style={{ fontWeight: "bold" }}>23/40</Text>
              </Text>
            }
          />
          <Button
            style={{
              padding: 5,
              margin: 5,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "gray",
            }}
            type="clear"
            title={
              <Text>
                P1{"\n"}
                <Text style={{ fontWeight: "bold" }}>23/40</Text>
              </Text>
            }
          />
          <Button
            style={{
              padding: 5,
              margin: 5,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "gray",
            }}
            type="clear"
            title={
              <Text>
                P1{"\n"}
                <Text style={{ fontWeight: "bold" }}>23/40</Text>
              </Text>
            }
          />
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
            style={{ paddingVertical: 10, paddingHorizontal: 20 }}
            type="clear"
            title={
              <Text style={{ fontWeight: "bold" }}>
                Arriving{"\n"}
                <Text style={{ fontWeight: "normal" }}>Today, 16:23</Text>
              </Text>
            }
          />
          <View
            style={{
              paddingTop: 25,
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
                padding: 8,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              2h 3m
            </Text>
          </View>
          <Button
            style={{ paddingVertical: 10, paddingHorizontal: 20 }}
            type="clear"
            title={
              <Text style={{ fontWeight: "bold" }}>
                Leaving{"\n"}
                <Text style={{ fontWeight: "normal" }}>Today, 16:23</Text>
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
              paddingHorizontal: 15,
              paddingVertical: 10,
              fontWeight: "bold",
            }}
          >
            Vehicle
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingVertical: 15,
            }}
          >
            <Text style={{ textAlign: "left" }}>Plate Number</Text>
            <Text style={{ textAlign: "left" }}>B12UBGS</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <Text style={{ textAlign: "left" }}>Type</Text>
            <Text style={{ justifyContent: "left" }}>Sedan</Text>
          </View>
        </View>

        {/* ----------------------------------- Payment Method  -----------------------------------*/}

        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 15,
          }}
        >
          <Text style={{ paddingHorizontal: 15 }}>Payment Method</Text>
          <Text style={{ paddingHorizontal: 15 }}>Visa - 8378</Text>
        </View>

        {/* ----------------------------------- Price  -----------------------------------*/}

        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 15,
          }}
        >
          <Text style={{ paddingHorizontal: 15 }}>Price</Text>
          <Text style={{ paddingHorizontal: 15 }}>AUD 10.00</Text>
        </View>

        {/* ----------------------------------- Book Now  -----------------------------------*/}

        <Button
          style={{ padding: 15 }}
          buttonStyle={{
            borderRadius: 15,

            backgroundColor: "rgb(155,195,255)",
          }}
          title={
            <Text style={{ weightcolor: "black", fontWeight: "bold" }}>
              Book now
            </Text>
          }
        />
      </SafeAreaView>
    );
  }
}

export default BookingScreen;
