import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({fetchDetail, style}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details) => {
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyDWndVjlN53Q9c0xl09FgsCCqTS5V_BcIo',
        language: 'en',
      }}
      fetchDetails={true}
    />
  );
};

export default GooglePlacesInput;