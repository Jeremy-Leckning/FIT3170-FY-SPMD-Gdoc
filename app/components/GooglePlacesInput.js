import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search place"
      onPress={(data, details = null) => {
        console.log("test");
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: "",
        language: "en",
      }}
    />
  );
};

export default GooglePlacesInput;
