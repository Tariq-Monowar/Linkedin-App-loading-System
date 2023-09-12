// import { Feather } from "@expo/vector-icons";
// import * as React from "react";
// import { MotiView } from "@motify/components"; // Change "Motiview" to "MotiView"
// import { StyleSheet, View } from "react-native";
// import { Easing } from "react-native-reanimated";

// const _color = "#6E01EF"; // Replace with a valid color code
// const _size = 80;

// const App = () => {
//     return (
//         <View style={styles.container}>
//           <View style={[styles.dot, styles.center]}>
//             {[...Array(3).keys()].map((index) => {
//               return (
//                 <MotiView
//                   from={{ opacity: 0.5, scale: 1 }}
//                   animate={{ opacity: 0, scale: 4 }}
//                   transition={{
//                     type: "timing",
//                     duration: 2000,
//                     easing: Easing.out(Easing.ease),
//                     delay: index * 350,//space op Daew
//                     repeatReverse: false,
//                     loop: true,
//                   }}
//                   key={index}
//                   style={[StyleSheet.absoluteFillObject, styles.dot]}
//                 />
//               );
//             })}
//             <Feather name="phone-outgoing" size={32} color="#fff" />
//           </View>
//         </View>
//       );
//     }

// export default App

// const styles = StyleSheet.create({
//     dot: {
//       width: _size,
//       height: _size,
//       borderRadius: _size,
//       backgroundColor: _color,
//     },
//     center: {
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });

import { Entypo } from "@expo/vector-icons";
import * as React from "react";
import { MotiView } from "@motify/components";
import { StyleSheet, View } from "react-native";
import { Easing } from "react-native-reanimated";

const dotColor = "#f97752"; // Color of the dot
const backgroundColor = "#fff"; // Background color of the dot
const dotSize = 40;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(2).keys()].map((index) => {
          return (
            <MotiView
              from={{ opacity: 0.5, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 550,
                repeatReverse: false,
                loop: true,
              }}
              key={index}
              style={[
                StyleSheet.absoluteFillObject,
                styles.dot,
                { backgroundColor: dotColor },
              ]}
            />
          );
        })}
        <View style={styles.iconContainer}>
          <Entypo name="linkedin" size={40} color={backgroundColor} />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  iconContainer: {
    backgroundColor: "#0b66c3",
    width: 70,
    height: 70,
    borderRadius: 50, // To make it a circle
    alignItems: "center",
    justifyContent: "center",
  },
});
