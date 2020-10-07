import React, { Component } from "react";
import { Text, Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Divider, Icon } from "react-native-elements";

class BookingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white", padding: "3%" }}>
        {/* ----------------------------------- Parking Info  -----------------------------------*/}
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            fontWeight: "500",
            paddingVertical: "1%",
          }}
        >
          Parking Type
        </Text>
        <Text
          style={{ fontSize: 22, fontWeight: "bold", paddingVertical: "1%" }}
        >
          Parking Name
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "gray",
            fontWeight: "500",
            paddingVertical: "1%",
          }}
        >
          Parking Location
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
          <Text style={{ paddingVertical: "1%" }}>Parking Price</Text>
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
            Today we have x lot available, don't forget to select before booking
          </Text>
        </View>
        <ScrollView horizontal style={{ paddingVertical: "4%" }}>
          <Button
            style={{
              padding: "5%",
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
              padding: "5%",
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
              padding: "5%",
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
              padding: "5%",
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
              padding: "5%",
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
            style={{ paddingVertical: "5%", paddingHorizontal: "8%" }}
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
            style={{ paddingVertical: "5%", paddingHorizontal: "8%" }}
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
              paddingHorizontal: "2%",
              paddingVertical: "2%",
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
              paddingVertical: "4%",
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
              paddingVertical: "4%",
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
