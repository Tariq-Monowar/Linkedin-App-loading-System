import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { MotiView } from "@motify/components"; // Change "Motiview" to "MotiView"
import { StyleSheet, View } from "react-native";
import { Easing } from "react-native-reanimated";

const _color = "#6E01EF"; // Replace with a valid color code
const _size = 80;

const CallAnimation = () => {
    return (
        <View style={styles.container}>
          <View style={[styles.dot, styles.center]}>
            {[...Array(3).keys()].map((index) => {
              return (
                <MotiView
                  from={{ opacity: 0.5, scale: 1 }}
                  animate={{ opacity: 0, scale: 4 }}
                  transition={{
                    type: "timing",
                    duration: 2000,
                    easing: Easing.out(Easing.ease),
                    delay: index * 350,//space op Daew
                    repeatReverse: false,
                    loop: true,
                  }}
                  key={index}
                  style={[StyleSheet.absoluteFillObject, styles.dot]}
                />
              );
            })}
            <Feather name="phone-outgoing" size={32} color="#fff" />
          </View>
        </View>
      );
    }

export default CallAnimation

const styles = StyleSheet.create({
    dot: {
      width: _size,
      height: _size,
      borderRadius: _size,
      backgroundColor: _color,
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
  });
  