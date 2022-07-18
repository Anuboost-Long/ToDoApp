import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '../Utils/NavigationHelper';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../Constants/colors';
import SCREEN_CONSTANT from '../Constants/SCREEN_CONSTANT';
import TabsNavigation from './TabsNavigation';
import FONTS from '../Constants/fonts';

const stack = createStackNavigator();

export default function Rootnavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <stack.Navigator
        initialRouteName={SCREEN_CONSTANT.tabs}
        screenOptions={{
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: COLORS.white, fontFamily: FONTS.REGULAR},
          headerStyle: {
            backgroundColor: COLORS.primary,
            borderBottomColor: COLORS.grey,
            borderWidth: moderateScale(0.2),
          },
        }}>
        <stack.Screen
          options={{headerShown: false}}
          name={SCREEN_CONSTANT.tabs}
          component={TabsNavigation}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
