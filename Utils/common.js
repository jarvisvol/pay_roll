import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          heading: position?.coords?.heading,
        };
        resolve(cords);
      },
      error => {
        reject(error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });

export const locations = {
  india1: {
    latitude: 37.421998333333335,
    longitude:  -122.084
  },
  india2: {
    latitude: 34.421998333333335,
    longitude: -132.084
  }
}