// import { Button, View, StyleSheet } from 'react-native';
// import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

// export default function Larn() {
//     const width = useSharedValue(100);
  
//     const handlePress = () => {
//       width.value = withSpring(width.value + 50);
//     };
  
//     return (
//       <View style={styles.container}>
//         <Animated.View
//           style={{
//             width,
//             height: 100,
//             backgroundColor: 'violet',
//           }}
//         />
//         <Button onPress={handlePress} title="Click me" />
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });
  
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function Larn() {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));

  return (
    <>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});