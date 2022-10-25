import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../Constants/colors';
import {moderateScale} from 'react-native-size-matters';
import FONTS_SIZE from '../../Constants/fontSize';
import FONTS from '../../Constants/fonts';
import {DEVICE} from '../../Calibration/Device';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <View style={[styles.category, {backgroundColor: COLORS.lightGrey}]}>
        <Text style={styles.categoryTitle}>Todos</Text>
      </View>
      <View style={[styles.category, {backgroundColor: COLORS.categoy}]}>
        <Text style={styles.categoryTitle}>Completed</Text>
      </View>
      <View style={[styles.category, {backgroundColor: COLORS.redButton}]}>
        <Text style={styles.categoryTitle}>Gave Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  category: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    alignSelf: 'center',
    padding: moderateScale(10),
  },
  categoryTitle: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font20,
    fontFamily: FONTS.REGULAR,
  },
});
