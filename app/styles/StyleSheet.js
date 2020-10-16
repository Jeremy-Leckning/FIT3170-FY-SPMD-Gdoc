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
} from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },

  parkingType: {
    fontSize: 14,
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
    fontSize: 20,
    color: "grey",
  },
  price: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  distance: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  address: { color: "black", width: "60%", fontSize: 16 },
  row_container: {
    flexDirection: "row",
  },
  spaceHolder: {
    paddingVertical: 5,
  },
  horizontalSpaceHolder: {
    paddingHorizontal: 5,
  },
  map: { height: 60, width: 60 },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(155,195,255)",
    width: "60%",
    height: "5%",
    borderRadius: 50,
    marginBottom: "20%",
    marginLeft: "20%",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    marginTop: "2.5%",
    fontSize: 18,
  },
  operation: { fontSize: 16, color: "black", fontWeight: "bold" },
  image: {
    height: "20%",
    width: "100%",
  },
});

export default styles;
