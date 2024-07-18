import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button, MD2Colors, Text } from 'react-native-paper';
import IconButton from '../../common/IconButton';
import EmployeeCard from '../../common/EmployeeCard';

export default function Home() {

  return (
    <View style={{ backgroundColor: MD2Colors.white, height: "100%" }}>
      <Text style={style.heading}>Welcome, User</Text>
      <View style={style.companyView}>

        <Text style={{ color: MD2Colors.white, fontSize: 14, marginLeft: 16, position: 'relative', top: -16 }}>
          Total Employement
        </Text>
        <Text style={{ color: MD2Colors.white, fontSize: 18, marginLeft: 16, position: 'relative', top: 0 }}>
          ******
        </Text>
        <IconButton
          iconSource={require('../../../assets/images/add-user.png')}
          iconStyle={{ height: 20, width: 20, resizeMode: 'contain', marginRight: 15, position: "absolute", right: 10, top: -25 }}
        />
      </View>

      <View style={style.sampleBlock}>
        <Text style={style.subHeading}>
          Employee
        </Text>
        <Button style={style.seeAllEmployeeBtn}>See all </Button>
      </View>

      <View style={style.employeeCardContainer}>
        <EmployeeCard />
      </View>
      <View style={style.employeeCardContainer}>
        <Text style={style.subHeading}>Investments</Text>
        <View style={{ ...style.card, }}>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "800",
    marginLeft: 15,
    marginTop: 10
  },
  border: {
    borderWidth: 1,
    borderColor: MD2Colors.black
  },
  companyView: {
    height: 100,
    width: "90%",
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: MD2Colors.orange300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 16, // This is for Android
  },
  sampleBlock: {
    height: 50,
    width: "90%",
    // borderWidth: 1,
    borderColor: MD2Colors.black,
    marginTop: 20,
    margin: 10,
    marginLeft: 17,

  },
  subHeading: {
    fontSize: 20,
    fontWeight: 800,
    padding: 5,
    color: MD2Colors.black,
  },

  seeAllEmployeeBtn: {
    position: "relative",
    top: -39,
    left: 150
  },
  employeeCardContainer: {
    position: "relative",
    top: -20,
    marginLeft: 10,
  },
  card: {
    width: "90%", // Adjust according to your card width
    height: 140, // Adjust according to your card height
    marginHorizontal: 15, // Adjust horizontal margin between cards
    backgroundColor: '#ccc',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#ffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    elevation: 15, // This is for Android,
    marginTop: 15
  },
})
