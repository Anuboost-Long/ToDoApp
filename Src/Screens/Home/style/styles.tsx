import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../../Calibration/Device';
import COLORS from '../../../Constants/colors';
import FONTS from '../../../Constants/fonts';
import FONTS_SIZE from '../../../Constants/fontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    marginTop: moderateScale(10),
    alignItems: 'center',
  },
  WelcomeHolder: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(DEVICE.DEVICE_Width / 1.1),
    height: moderateScale(DEVICE.DEVICE_Height / 7),
    backgroundColor: COLORS.primary,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  WelcomeText: {
    fontSize: FONTS_SIZE.font18,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },
  NormalText: {
    fontSize: FONTS_SIZE.font16,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },
  dashboard: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: moderateScale(DEVICE.DEVICE_Width / 1.1),
    shadowColor: '#000',
  },
  stats: {
    borderRadius: moderateScale(5),
    width: '32%',
    height: moderateScale(DEVICE.DEVICE_Height / 10),
    backgroundColor: COLORS.primary,
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  StatsTitle: {
    fontSize: FONTS_SIZE.font14,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
    letterSpacing: moderateScale(0.5),
  },
  StatsValue: {
    fontSize: FONTS_SIZE.font20,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },

  TodayTask: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: moderateScale(DEVICE.DEVICE_Width / 1.1),
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(15),
    borderRadius: moderateScale(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  TitleText: {
    fontSize: FONTS_SIZE.font16,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
    letterSpacing: moderateScale(0.5),
  },
  todoText: {
    fontSize: FONTS_SIZE.font14,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },
  todoContainer: {
    flexDirection: 'row',
    borderRadius: moderateScale(5),
    backgroundColor: COLORS.primary,
    width: moderateScale(DEVICE.DEVICE_Width / 1.1),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(15),
  },
});
