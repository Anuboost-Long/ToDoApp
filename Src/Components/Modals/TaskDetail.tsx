import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {data} from '../../Screens/Home/components/EachTasks';
import COLORS from '../../Constants/colors';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../Calibration/Device';
import SizedBox from '../SizedBox';
import FONTS_SIZE from '../../Constants/fontSize';
import FONTS from '../../Constants/fonts';
import IconAssets from '../../Assets/Icons';
import {ScrollView} from 'react-native-gesture-handler';

interface TaskDetailProp {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: data;
}

export default function TaskDetail({
  visible,
  setVisible,
  value,
}: TaskDetailProp) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Modal Header  */}
          <View style={styles.modalHeader}>
            <SizedBox />
            <Text style={styles.headerText}>Task's Detail</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <IconAssets.CloseWhite
                width={moderateScale(25)}
                height={moderateScale(25)}
              />
            </TouchableOpacity>
          </View>

          <SizedBox height={moderateScale(10)} />

          {/* content  */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            <View style={styles.rowView}>
              <View style={styles.innerRowLeft}>
                <Text style={styles.titleText}>Task Name: </Text>
                <Text style={styles.TaskName}>{value.title}</Text>
              </View>
              <View style={styles.innerRowRight}>
                <Text style={styles.titleText}>Status: </Text>
                <Text
                  style={[
                    styles.TaskName,
                    {
                      color:
                        value.status === 'Completed'
                          ? COLORS.primary
                          : COLORS.red,
                    },
                  ]}>
                  {value.status}
                </Text>
              </View>
            </View>

            <SizedBox height={moderateScale(10)} />

            {/* description  */}
            <View style={styles.description}>
              <Text style={styles.titleText}>Task Description: </Text>
              <SizedBox height={moderateScale(10)} />
              <Text style={styles.TaskName}>{value.description}</Text>
            </View>

            <SizedBox height={moderateScale(30)} />
          </ScrollView>
        </View>
        {/* button  */}
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.giveup}>
            <Text style={styles.headerText}>Give Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.complete}>
            <Text style={styles.headerText}>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    borderRadius: moderateScale(5),
    opacity: 1,
    height: moderateScale(DEVICE.DEVICE_Height / 2.5),
    width: moderateScale(DEVICE.DEVICE_Width / 1.12),
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  modalHeader: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.buttonPrimary,
    height: '15%',
    width: '100%',
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5),
  },
  headerText: {
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.white,
  },
  rowView: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '45%',
  },
  innerRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '45%',
  },
  TaskName: {
    fontSize: FONTS_SIZE.font12,
    fontFamily: FONTS.REGULAR,
    color: COLORS.commonText,
  },
  description: {
    paddingHorizontal: moderateScale(10),
  },
  titleText: {
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.commonText,
  },
  giveup: {
    borderRadius: moderateScale(5),
    height: moderateScale(35),
    width: '45%',
    backgroundColor: COLORS.redButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  complete: {
    height: moderateScale(35),
    borderRadius: moderateScale(5),
    width: '45%',
    backgroundColor: COLORS.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer: {
    bottom: DEVICE.DEVICE_Height / 3.5,
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scroll: {
    maxHeight: '60%',
  },
});
