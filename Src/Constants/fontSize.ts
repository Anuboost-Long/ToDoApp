import {Dimensions, PixelRatio, Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const DEVICE = {
  DEVICE_WIDTH: Dimensions.get('screen').width,
  DEVICE_HEIGHT: Dimensions.get('screen').height,
};

const DEVICE_OS = Platform.OS;

const scale = DEVICE.DEVICE_WIDTH / 320;

function checkRatio(font_size: number) {
  if (DEVICE_OS === 'ios') {
    if (DEVICE.DEVICE_HEIGHT < 600) {
      return PixelRatio.getFontScale() * moderateScale(font_size - 2);
    } else if (DEVICE.DEVICE_HEIGHT < 800) {
      return PixelRatio.getFontScale() * moderateScale(font_size);
    } else {
      return PixelRatio.getFontScale() * moderateScale(font_size);
    }
  } else {
    const newSize = font_size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const FONTS_SIZE = {
  font7: checkRatio(7),
  font8: checkRatio(8),
  font9: checkRatio(9),
  font10: checkRatio(10),
  font11: checkRatio(11),
  font12: checkRatio(12),
  font13: checkRatio(13),
  font14: checkRatio(14),
  font15: checkRatio(15),
  font16: checkRatio(16),
  font17: checkRatio(17),
  font18: checkRatio(18),
  font20: checkRatio(20),
  font24: checkRatio(24),
  font25: checkRatio(25),
  font30: checkRatio(30),
  font35: checkRatio(35),
  font38: checkRatio(38),
};

export default FONTS_SIZE;
