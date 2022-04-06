import {transform} from '@babel/core';
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Image, Animated} from 'react-native';
import {colors, imagePath} from '../utils/Constant';
const AutomaticAnimation = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animationStart = () => {
    // 0 to 2 for right tick animation and 5 to 7 for hourglass animation
    // from 2 to 5 is the dash line animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 2,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 5,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 7,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };
  useEffect(() => {
    animationStart();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center'}}>
        <Animated.View
          style={[
            styles.imageContainer,
            {
              opacity: animatedValue.interpolate({
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
                opacity: animatedValue.interpolate({
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
              opacity: animatedValue.interpolate({
                inputRange: [2, 3, 4, 5],
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
              opacity: animatedValue.interpolate({
                inputRange: [5, 6],
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
                opacity: animatedValue.interpolate({
                  inputRange: [6, 7],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                }),
                transform: [
                  {
                    rotate: animatedValue.interpolate({
                      inputRange: [6, 7],
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
    </View>
  );
};
export default AutomaticAnimation;
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
});
