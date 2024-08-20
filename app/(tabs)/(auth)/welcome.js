import { View, Text } from 'react-native'
import React from 'react'

const welcome = () => {
  return (
    <View>
      <Text>welcome</Text>
    </View>
  )
}

export default welcome



// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, View, Text, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Color, Padding, Border, FontSize, FontFamily } from "../../components/common/GlobalStyles";

// const WelcomeScreen1 = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.welcomeScreen}>
//       <View style={[styles.frame, styles.framePosition1]}>
//         <Image
//           style={[styles.frameIcon, styles.framePosition1]}
//           contentFit="cover"
//           source={require("../assets/frame.png")}
//         />
//         <Image
//           style={[styles.frameIcon1, styles.framePosition]}
//           contentFit="cover"
//           source={require("../assets/frame1.png")}
//         />
//         <View style={styles.frame1}>
//           <View style={styles.welcomeImage}>
//             <Image
//               style={styles.workFromHome}
//               contentFit="cover"
//               source={require("../assets/work-from-home.png")}
//             />
//           </View>
//         </View>
//       </View>
//       <View style={[styles.frame2, styles.framePosition1]}>
//         <View style={[styles.frame3, styles.frameLayout1]}>
//           <View style={[styles.frameChild, styles.frameLayout]} />
//         </View>
//         <View style={[styles.frame4, styles.frameLayout1]}>
//           <View style={[styles.frameItem, styles.frameLayout]} />
//         </View>
//         <View style={[styles.frame5, styles.framePosition]}>
//           <View style={[styles.texts, styles.textsPosition]}>
//             <View style={[styles.frame6, styles.textsPosition]}>
//               <Text
//                 style={[styles.discoverYourDream, styles.exploreAllThePosition]}
//               >
//                 Discover Your Dream Job here
//               </Text>
//             </View>
//             <Text style={[styles.exploreAllThe, styles.exploreAllThePosition]}>
//               Explore all the existing job roles based on your interest and
//               study major
//             </Text>
//           </View>
//         </View>
//         <View style={styles.actionButtons}>
//           <Pressable
//             style={[styles.button, styles.buttonFlexBox]}
//             onPress={() => navigation.navigate("LoginScreen1")}
//           >
//             <Text style={[styles.button1, styles.buttonTypo]}>Login</Text>
//           </Pressable>
//           <Pressable
//             style={[styles.button2, styles.buttonFlexBox]}
//             onPress={() => navigation.navigate("RegisterScreen1")}
//           >
//             <Text style={[styles.button3, styles.buttonTypo]}>Register</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   framePosition1: {
//     position: "absolute",
//     overflow: "hidden",
//   },
//   framePosition: {
//     top: 0,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   frameLayout1: {
//     height: 372,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   frameLayout: {
//     width: 372,
//     borderWidth: 2,
//     borderColor: Color.colorGhostwhite,
//     borderStyle: "solid",
//     height: 372,
//     top: 0,
//     position: "absolute",
//   },
//   textsPosition: {
//     width: 385,
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   exploreAllThePosition: {
//     textAlign: "center",
//     left: 0,
//     position: "absolute",
//   },
//   buttonFlexBox: {
//     paddingVertical: Padding.p_mini,
//     paddingHorizontal: Padding.p_xl,
//     width: 160,
//     borderRadius: Border.br_3xs,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   buttonTypo: {
//     fontSize: FontSize.size_xl,
//     textAlign: "center",
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//   },
//   frameIcon: {
//     top: 185,
//     left: 230,
//     width: 678,
//     height: 496,
//   },
//   frameIcon1: {
//     height: 635,
//     left: 0,
//     width: 1138,
//   },
//   workFromHome: {
//     width: 363,
//     height: 370,
//     overflow: "hidden",
//   },
//   welcomeImage: {
//     left: 1,
//     borderRadius: 20,
//     paddingHorizontal: 11,
//     paddingVertical: 52,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     height: 422,
//     top: 0,
//     position: "absolute",
//   },
//   frame1: {
//     top: 377,
//     left: 376,
//     width: 386,
//     height: 422,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   frame: {
//     top: -327,
//     left: -355,
//     height: 799,
//     width: 1138,
//   },
//   frameChild: {
//     left: 169,
//     transform: [
//       {
//         rotate: "27.1deg",
//       },
//     ],
//   },
//   frame3: {
//     top: 106,
//     width: 945,
//     left: 0,
//   },
//   frameItem: {
//     left: 0,
//   },
//   frame4: {
//     top: 165,
//     left: 58,
//     width: 957,
//   },
//   discoverYourDream: {
//     top: -8,
//     fontSize: 35,
//     color: Color.colorSlateblue,
//     width: 343,
//     fontFamily: FontFamily.poppinsSemiBold,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   frame6: {
//     height: 106,
//     overflow: "hidden",
//   },
//   exploreAllThe: {
//     top: 129,
//     fontSize: FontSize.size_sm,
//     fontFamily: FontFamily.poppinsRegular,
//     color: Color.colorBlack,
//     width: 323,
//   },
//   texts: {
//     height: 171,
//   },
//   frame5: {
//     left: 365,
//     width: 344,
//     height: 171,
//   },
//   button1: {
//     color: Color.colorWhite,
//   },
//   button: {
//     shadowColor: "#cbd6ff",
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowRadius: 20,
//     elevation: 20,
//     shadowOpacity: 1,
//     backgroundColor: Color.colorSlateblue,
//   },
//   button3: {
//     color: Color.colorGray,
//   },
//   button2: {
//     marginLeft: 30,
//     backgroundColor: Color.colorWhite,
//   },
//   actionButtons: {
//     top: 259,
//     left: 362,
//     flexDirection: "row",
//     position: "absolute",
//   },
//   frame2: {
//     top: 519,
//     left: -323,
//     width: 1016,
//     height: 537,
//   },
//   welcomeScreen: {
//     flex: 1,
//     width: "100%",
//     height: 926,
//     overflow: "hidden",
//     backgroundColor: Color.colorWhite,
//   },
// });

// export default WelcomeScreen1;
