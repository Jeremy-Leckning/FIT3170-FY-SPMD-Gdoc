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
            style={{ padding: 20 }}
            type="clear"
            title={<Text>Arriving{"\n"}Today, 16:20</Text>}
          />
          <View
            style={{
              paddingVertical: 20,
              margin: 12,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                backgroundColor: "blue",
                borderRadius: 20,
                borderWidth: 1,
                overflow: "hidden",
                padding: 10,
              }}
            >
              Duration
            </Text>
          </View>
          <Button
            style={{ padding: 20 }}
            type="clear"
            title={<Text>Leaving{"\n"}Today, 16:23</Text>}
          />
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
            Vehicle
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Text>Plate Number</Text>
            <Text>B12UBGS</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Text>Type</Text>
            <Text>Sedan</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
            Payment Method
          </Text>
          <Text style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
            Visa - 8378
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
            Price
          </Text>
          <Text style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
            AUD 10.00
          </Text>
        </View>

        <Button title="Book Now" />
      </SafeAreaView>
    );
  }
}

export default BookingScreen;
