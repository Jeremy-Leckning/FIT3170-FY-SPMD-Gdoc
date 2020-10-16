import React, { Component } from "react";
import {
  Button,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  View,
  flexDirection,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

let fontMultiplier = 1;

const styles = StyleSheet.create({
  title: {
    fontSize: 20 * fontMultiplier,
    color: "black",
    fontWeight: "bold",
  },
 
  parkingType: {
    fontSize: 14 * fontMultiplier,
    color: "grey",
    fontWeight: "bold",
  },

  rating: {
    backgroundColor: "gold",
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  location: {
    fontSize: 20 * fontMultiplier,
    color: "grey",
  },
  price: {
    fontSize: 16 * fontMultiplier,
    color: "black",
    fontWeight: "bold",
  },
  distance: {
    fontSize: 16 * fontMultiplier,
    color: "black",
    fontWeight: "bold",
  },
  address: { color: "black", width: "60%", fontSize: 16 * fontMultiplier },
  row_container: {
    flexDirection: "row",
  },
  spaceHolder: {
    paddingVertical: 5,
  },
  horizontalSpaceHolder: {
    paddingHorizontal: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 14 * fontMultiplier,
  },
  heading: { fontWeight: "bold", fontSize: 16 * fontMultiplier },
  map: { height: 60, width: 60 },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignItems: "center",
  },

  button: {
    borderRadius: 15,
    backgroundColor: "rgb(155,195,255)",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    marginTop: "2.5%",
    fontSize: 18 * fontMultiplier,
  },
  parkinglot: {
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "gray",
  },
  operation: {
    fontSize: 16 * fontMultiplier,
    color: "black",
    fontWeight: "bold",
  },
  image: {
    height: "40%",
    width: "100%",
  },
  duration: {
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
    fontSize: 15 * fontMultiplier,
  },
  info: { textAlign: "left", fontSize: 15 * fontMultiplier },
  divider: { borderBottomColor: "gray", borderBottomWidth: 1 },
});

export default styles;
