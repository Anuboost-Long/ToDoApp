import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FONTS_SIZE from '../../../Constants/fontSize';
import FONTS from '../../../Constants/fonts';
import COLORS from '../../../Constants/colors';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../../Calibration/Device';
import IconAssets from '../../../Assets/Icons';
import {useState} from 'react';
import TaskDetail from '../../../Components/Modals/TaskDetail';

export interface data {
  title: string;
  status: string;
  id: number;
  description: string;
}

interface TaskProps {
  item: data;
}

export default function EachTasks({item}: TaskProps) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.todoContainer}
        onPress={() => setVisible(true)}>
        <Text style={styles.todoText}>{item.title}</Text>
        <IconAssets.InfoWhite
          width={moderateScale(25)}
          height={moderateScale(25)}
        />
      </TouchableOpacity>
      <TaskDetail visible={visible} setVisible={setVisible} value={item} />
    </>
  );
}

const styles = StyleSheet.create({
  todoText: {
    fontSize: FONTS_SIZE.font14,
    color: COLORS.white,
    fontFamily: FONTS.REGULAR,
  },
  todoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(5),
    backgroundColor: COLORS.primary,
    width: moderateScale(DEVICE.DEVICE_Width / 1.1),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(15),
  },
});
