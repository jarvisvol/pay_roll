import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import TextInput from '../../common/TextInput'
import { useState } from 'react'
import { Button } from 'react-native-paper'
import { Image } from 'react-native'
import { getCurrentLocation } from '../../../Utils/common'

export default function Home() {

  const [formObj, setFormObj] = useState({
    source: "", 
    destination: ""
  })

  const [userLocation, setUserLocation] = useState({
    latitude: 28.7041,
    longitude: 77.1025
  })

  useEffect(() => {
    getLiveLocation()
  }, [])

  const changeHandler = () => {
    console.log(formObj);
  }

  const getLiveLocation = async () => {

    const {latitude, longitude} = await getCurrentLocation();

    setUserLocation({
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (

    <View style={{width:"100%", height: "100%"}}>
      <MapView
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} 
        provider={PROVIDER_GOOGLE} 
        style={style.mapContainer}
        >
        <Marker draggable={true} coordinate={userLocation} onDragEnd={(e) => {console.log( e.nativeEvent.coordinate)}} >

        </Marker>
        </MapView>
      <TextInput onChangeText={(text) =>  setFormObj({...formObj, source: text})} placeholder={"source"} />
      <TextInput placeholder={"Destination"} />
      <Button onPress={() => changeHandler()} > search </Button>
    </View>
  )
}

const style = StyleSheet.create({
  mapContainer: {
    width:"100%",
    height: "80%",
    paddingTop: 20
  }
})

