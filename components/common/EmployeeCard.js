import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, View } from 'react-native'
import { MD2Colors, Text } from 'react-native-paper';
const data = [
  { id: '1', title: 'Card 1' },
  { id: '2', title: 'Card 2' },
  { id: '3', title: 'Card 3' },
  { id: '4', title: 'Card 1' },
  { id: '5', title: 'Card 2' },
  { id: '6', title: 'Card 3' },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <ImageBackground
      source={require('../../assets/images/zxcv.png')}
      resizeMode="cover"
      style={styles.empImage}
    />
    <Text style={style.fieldTitle}>Name: <Text style={style.fieldAnswer}> Shubham</Text></Text>
    <Text style={style.fieldTitle}>Age: <Text style={style.fieldAnswer}>25</Text></Text>
    <Text style={style.fieldTitle}>Scince: <Text style={style.fieldAnswer}>1998</Text></Text>

  </View>
);

export default function EmployeeCard() {
  return (
    <View style={style.empCard}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

style = StyleSheet.create({
  empCard: {
    height: 200,
    marginTop: 10
  },
  fieldTitle : {
    fontSize: 12,
    fontWeight: 700,
    color: MD2Colors.white,
    marginLeft:10,
    margin:1
  }, 
  fieldAnswer : {
    fontSize:12,
    color: MD2Colors.white,
    fontWeight: 500
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 120, // Adjust according to your card width
    height: 160, // Adjust according to your card height
    marginHorizontal: 15, // Adjust horizontal margin between cards
    backgroundColor: MD2Colors.green300,
    borderRadius: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 14, // This is for Android,
  },
  empImage :{
    height:70,
    width:80,
    margin:8,
    marginLeft: 9
  }
});