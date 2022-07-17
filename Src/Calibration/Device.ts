import {Dimensions} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('screen');

export const DEVICE = {
  DEVICE_Height: height,
  DEVICE_Width: width,
};
