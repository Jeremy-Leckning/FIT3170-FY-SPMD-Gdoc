import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
const GooglePlacesInput = () => {
  return (
    
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log("test")
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: '',
        language: 'en',
        components: 'country:au',
      }}
      currentLocation={true}
      currentLocationLabel='Current location'
      
    />
  );
};
 
export default GooglePlacesInput;