import {transform} from '@babel/core';
import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors, imagePath} from '../utils/Constant';
const ManualAnimation = () => {
  const animatedTickValue = useRef(new Animated.Value(0)).current;
  const animatedDashValue = useRef(new Animated.Value(0)).current;
  const animatedHourglassValue = useRef(new Animated.Value(0)).current;
  const animationStart = () => {
    // 0 to 2 for right tick animation and 5 to 7 for hourglass animation
    // from 2 to 5 is the dash line animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedTickValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedTickValue, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  const endTickAnimation = () => {
    animatedTickValue.stopAnimation();
    animatedTickValue.setValue(1);
    Animated.timing(animatedTickValue, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animatedDashValue, {
            toValue: 3,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(animatedDashValue, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    });
  };
  const endDashAniamtion = () => {
    animatedDashValue.stopAnimation();
    animatedDashValue.setValue(3);
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedHourglassValue, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedHourglassValue, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  const endHourglassAnimation = () => {
    animatedHourglassValue.stopAnimation();
    animatedHourglassValue.setValue(1);
    Animated.timing(animatedHourglassValue, {
      toValue: 2,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    animationStart();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{justifyContent: 'center'}}>
          <Animated.View
            style={[
              styles.imageContainer,
              {
                opacity: animatedTickValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <Animated.Image
              source={imagePath.tick}
              style={[
                styles.img,
                {
                  opacity: animatedTickValue.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ]}
              resizeMode="contain"
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.transitionLine,
              {
                opacity: animatedDashValue.interpolate({
                  inputRange: [0, 1, 2, 3],
                  outputRange: [0, 1, 0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
          <Animated.View
            style={[
              styles.imageContainer,
              {
                opacity: animatedHourglassValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <Animated.Image
              source={imagePath.hourglass}
              style={[
                styles.img,
                {
                  opacity: animatedHourglassValue.interpolate({
                    inputRange: [1, 2],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                  transform: [
                    {
                      rotate: animatedHourglassValue.interpolate({
                        inputRange: [1, 2],
                        outputRange: ['0deg', '180deg'],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.animationButton}
            onPress={endTickAnimation}>
            <Text>End tick Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.animationButton}
            onPress={endDashAniamtion}>
            <Text>End dash Animation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.animationButton}
            onPress={endHourglassAnimation}>
            <Text>End hourglass Animation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ManualAnimation;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  transitionLine: {
    borderLeftWidth: 2,
    marginVertical: 10,
    marginLeft: 30,
    height: 40,
    width: 1,
    borderStyle: 'dashed',
  },
  imageContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'lavender',
  },
  img: {
    width: 40,
    height: 40,
  },
  animationButton: {
    padding: 10,
    marginLeft: 10,
    marginVertical: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
