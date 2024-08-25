import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { ActivityIndicator } from 'react-native-paper';
import { Color, FontFamily, FontSize } from '../../../common/GlobalStyles';
import GooglePlacesInput from '../../../common/GooglePlaceAutoComplete';

const Home = () => {

  const [height, setHeight] = useState(new Animated.Value(30));

  const [userLocation, setUserLocation] = useState({
    latitude: '',
    longitude: '',
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      }
    )
  }, [])

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      // Calculate new height based on drag distance
      const newHeight = Math.min(90, Math.max(30, height._value - (gestureState.dy / 10)));

      // Set the new height value, ensuring it doesn't go below 30
      height.setValue(newHeight);
    },
    onPanResponderRelease: () => {
      // Ensure the height doesn't go below 30% on release
      const finalHeight = Math.min(90, Math.max(30, height._value));

      // Smoothly animate the height to the final clamped value
      Animated.spring(height, {
        toValue: finalHeight,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.upperBox}>
        {
          !userLocation.latitude || !userLocation.longitude ? 
          <ActivityIndicator style={{zIndex: 4, position: 'relative', top: '60%', opacity: 1}} animating={true} color={Color.colorSlateblue} size={'large'}/> 
          :
          <MapView
            provider={PROVIDER_GOOGLE}
            region={userLocation}
            // onRegionChange={(x) => console.log(x,"ddd")}
            style={{height:'100%', width:'100%'}}
          >
            <Marker
              coordinate={userLocation}
            />
          </MapView>
        }
      </View>
      <Animated.View
        style={[styles.lowerBox, {
          flex: height.interpolate({
            inputRange: [30, 90],
            outputRange: [0.3, 0.9],
          }),
        }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.placeSearch}>
          <Text style={styles.placeSearchText}>
            From
          </Text>
          <GooglePlacesInput 
            fetchDetail={true}
            style={styles.placeSearchBox} 
          />
          <Text style={styles.placeSearchText}>
            To
          </Text>
          <GooglePlacesInput 
            fetchDetail={false}
            style={styles.placeSearchBox} 
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  upperBox: {
    flex: 0.7,
  },
  lowerBox: {
    borderTopLeftRadius: 35,  // Rounded corners on the upper side of the lower box
    borderTopRightRadius: 35, // Rounded corners on the upper side of the lower box
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
  placeSearch: {
    height: 200,
    width: '100%',
    position: 'relative',
    top: 20,
    margin: 10,
    paddingLeft: 20
  },
  placeSearchText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_base
  },
  placeSearchBox: {
    width: 100
  }
});

export default Home;
