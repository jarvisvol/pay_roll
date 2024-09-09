import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Padding, Color, Border, FontSize, FontFamily } from "../../../common/GlobalStyles";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
      <View style={styles.userProfileContainer}>
        <View style={styles.userProfileCircle}>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userDesignation}>User Designation</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  userProfileContainer: {
    flexDirection: 'row',
    height: '10%',
    width: '50%',
    // borderWidth: 1,
    margin: 10
  },
  userProfileCircle: {
    height: '45%',
    width: '20%',
    borderRadius: 20,
    backgroundColor: Color.colorDimgray

  },
  userDetails: {
    marginLeft: 10
  },
  userName: {
    fontFamily: FontFamily.poppinsBold
  },
  userDesignation: {
    fontFamily: FontFamily.poppinsMedium
  }
})