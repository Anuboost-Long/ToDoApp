import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {moderateScale} from 'react-native-size-matters';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import COLORS from '../../../Constants/colors';
import IconAssets from '../../../Assets/Icons';
import SizedBox from '../../../Components/SizedBox';
import {DEVICE} from '../../../Calibration/Device';
import FONTS from '../../../Constants/fonts';
import FONTS_SIZE from '../../../Constants/fontSize';
import {useState} from 'react';

interface headerprops {
  handleAddTask: (event: GestureResponderEvent) => string;
  handleClearTask: (event: GestureResponderEvent) => void;
  selectAll: boolean;
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  handleAddTask,
  handleClearTask,
  setSelectAll,
  selectAll,
}: headerprops) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <View style={styles.iconHolder}>
        <IconAssets.Edit width={moderateScale(60)} height={moderateScale(60)} />
      </View>

      <SizedBox height={moderateScale(10)} />

      <View style={styles.titleContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add New Task</Text>
        </View>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.inputHolder}>
          <Text style={styles.title}>Task Name</Text>
          <SizedBox height={moderateScale(10)} />
          <TextInput
            onChangeText={value => setName(value)}
            value={name}
            style={styles.input}
            placeholder="Task Name"
            placeholderTextColor={COLORS.lightGrey}
          />
          <SizedBox height={moderateScale(10)} />
          <Text style={styles.title}>Task Description</Text>
          <SizedBox height={moderateScale(10)} />
          <AutoGrowingTextInput
            onChangeText={value => setDescription(value)}
            value={description}
            style={styles.input}
            placeholderTextColor={COLORS.lightGrey}
            placeholder="Task Description"
          />
          <SizedBox height={moderateScale(10)} />
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={styles.giveup}
              onPress={() => {
                setName('');
                setDescription('');
                handleClearTask(name);
              }}>
              <Text style={styles.headerText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={name.length >= 5 ? false : true}
              style={styles.complete}
              onPress={() => {
                handleAddTask(name, description);
                setName('');
                setDescription('');
              }}>
              <Text style={styles.headerText}>Add Task</Text>
            </TouchableOpacity>
          </View>
          <SizedBox height={moderateScale(10)} />
        </View>
      </View>
      <SizedBox height={moderateScale(20)} />
      <View style={styles.rowView}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity
          style={styles.innerRow}
          onPress={() => setSelectAll(!selectAll)}>
          {selectAll ? (
            <IconAssets.Tick
              width={moderateScale(20)}
              height={moderateScale(20)}
            />
          ) : (
            <View style={styles.blankCircle} />
          )}

          <SizedBox width={moderateScale(5)} />
          <Text style={styles.title}>Select All</Text>
        </TouchableOpacity>
      </View>
      <SizedBox height={moderateScale(15)} />
    </>
  );
}

const styles = StyleSheet.create({
  iconHolder: {
    alignSelf: 'center',
    marginTop: moderateScale(10),
    width: moderateScale(100),
    height: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  titleContainer: {
    alignSelf: 'center',
    borderColor: COLORS.buttonPrimary,
    borderWidth: moderateScale(0.5),
    borderRadius: moderateScale(5),
    width: moderateScale(DEVICE.DEVICE_Width / 1.12),
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  header: {
    borderTopLeftRadius: moderateScale(5),
    borderTopRightRadius: moderateScale(5),
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(10),
  },
  headerText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.REGULAR,
    letterSpacing: 0.5,
  },
  title: {
    color: COLORS.commonText,
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.REGULAR,
  },
  inputHolder: {
    paddingHorizontal: moderateScale(10),
    width: '100%',
  },
  input: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.commonText,
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  giveup: {
    borderRadius: moderateScale(5),
    height: moderateScale(35),
    width: '40%',
    backgroundColor: COLORS.redButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  complete: {
    height: moderateScale(35),
    borderRadius: moderateScale(5),
    width: '40%',
    backgroundColor: COLORS.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer: {
    paddingHorizontal: moderateScale(10),
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowView: {
    paddingHorizontal: moderateScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  blankCircle: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: COLORS.buttonPrimary,
  },
});
