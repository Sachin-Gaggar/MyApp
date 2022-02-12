import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screenModules/homeScreen';
import MapsUi from '../screenModules/MapsUi';
import Startup from '../screenModules/startup';
import {screenNames} from '../utils/Constant';
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Startup} name={screenNames.startupScreen} />
      <Stack.Screen
        component={HomeScreen}
        name={screenNames.homeScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen component={MapsUi} name={screenNames.mapScreenHomePage} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
