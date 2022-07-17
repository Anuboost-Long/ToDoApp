import React from 'react';
import {FlexStyle, View} from 'react-native';

interface SizedBoxParams {
  height?: FlexStyle['height'];
  width?: FlexStyle['height'];
}
const SizedBox = ({height = 0, width = 0}: SizedBoxParams) => {
  return <View style={{height, width}} />;
};

export default SizedBox;
