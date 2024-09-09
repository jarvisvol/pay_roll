import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Padding, Color, Border, FontSize, FontFamily, FontWeights } from "../../../common/GlobalStyles";
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';
import { workModeConst } from '../../../../Utils/common';
import { SelectList } from 'react-native-dropdown-select-list'
import Background from '../../../common/Background';

const workModeOptions = [
  { value: 'Work from home', key: workModeConst.workFromHome },
  { value: 'Work from office', key: workModeConst.workFromOffice },
  { value: 'On site', key: workModeConst.onSite }
];

const Home = () => {

  const [workMode, setWorkMode] = useState('');

  const today = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = daysOfWeek[today.getDay()];
  
  // Get the date
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const year = today.getFullYear();
  const date = `${year}-${month}-${day}`; // Format: YYYY-MM-DD
  
  // Get the current time
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  const time = `${hours}:${minutes}`; // Format: HH:MM:SS
  
  return (
    <Background>
      <View style={styles.userProfileContainer}>
        <View style={styles.userProfileCircle}>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userDesignation}>{`Full Stack Developer at Birla Groups Pvt Ltd` }</Text>
        </View>
      </View>
      <View style={styles.notificationView}>
        <Icon
          name='notification'
          size={18}
          color={Color.colorDimgray}
          onPress={() => console.log('jiij')}
          //color blue krnge if notification hongi
         />
      </View>
      <View style={styles.signInContainer}>
        <View>
          <Text style={styles.dateStyle}>{dayName}, {day}</Text>
          <View>
            <Text style={styles.timeStyles}>{time}, IST </Text>
          </View>
        </View>
        <View style={{position:'relative', left: 50, top: 10}}>
          <SelectList 
            setSelected={(val) => setWorkMode(val)} 
            data={workModeOptions} 
            save="lable"
            placeholder='Work Mode *'
            search={false}
            inputStyles={styles.textStyle}
            boxStyles={styles.dropDownBox}
            dropdownTextStyles={styles.textStyle2}
          />
        </View>
        <View style={{position: 'relative', top: 130, right: 175}}>
          <Button mode='outlined' style={styles.btnStyles} onPress={() => {console.log("kook")}}>Sign In</Button>
        </View>
      </View>
      <View style={{...styles.signInContainer, flexDirection: 'column'}}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline'}}> 
          <Text style={styles.textStyleHeading}>Attendence</Text>
          <Button mode='text' style={{position: 'relative', left: 140, }}>{`4 gaps (regularize)`}</Button>
        </View>
        <View style={{flexDirection: 'row',  alignItems: 'baseline', marginTop: 20}}>
          <Text style={styles.textStyleHeading}>Upcomming Holiday</Text>
          <Text style={{...styles.textStyle, position: 'relative', left: 90}}>bhaiya duz Holiday</Text>
        </View>
      </View>
      <View style={{...styles.signInContainer, flexDirection: 'column'}}>
        <Text style={styles.textStyleHeading}>Salary: ****</Text>
        <Text style={styles.textStyleHeading}>Basic: ****</Text>
        <Text style={styles.textStyleHeading}>PF: ****</Text>
        <Text style={styles.textStyleHeading}>Deduction: ****</Text>

        <Button mode='text' style={{position: 'relative', }}>Show</Button>
      </View>
    </Background>
  )
}

export default Home

const styles = StyleSheet.create({
  userProfileContainer: {
    flexDirection: 'row',
    height: '10%',
    width: '50%',
    margin: 10,
    
  },
  userProfileCircle: {
    height: '45%',
    width: '20%',
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    elevation: 10

  },
  userDetails: {
    marginLeft: 10
  },
  userName: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    elevation: 30
    
  },
  userDesignation: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textShadowColor: Color.colorDimgray, // Shadow color
    textShadowOffset: { width: -1, height: .3 }, // Shadow offset
    textShadowRadius: 1,
    // fontWeight: FontWeights.wieght_300
  },
  notificationView: {
    position: 'absolute',
    right: 30,
    top: 45,
    borderWidth: 0.5,
    padding: 6,
    borderRadius: 40,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorSlateblue
  }, 
  signInContainer: {
    height: '25%',
    margin: 13,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: Color.colorBackground,
    elevation: 10,
    borderRadius: 9,
    
  }, 
  dateStyle: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_11xl,
    color: Color.colorGray
  },
  timeStyles: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_xl
  },
  textStyle: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xxsm
  },
  textStyle2: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xxsm
  },
  dropDownBox: {
    width: 130,
    
  },
  btnStyles: {
  },
  textStyleHeading: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_sm
  }
})