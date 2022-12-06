import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DEVICE} from '../../../Calibration/Device';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../../Constants/colors';
import IconAssets from '../../../Assets/Icons';
import SizedBox from '../../../Components/SizedBox';
import FONTS from '../../../Constants/fonts';
import FONTS_SIZE from '../../../Constants/fontSize';
import {todo} from '../AddTodo';
interface TodoCardsProp {
  selectAll: boolean;
  index: number;
  item: todo;
  handleRemoveaTask: (event: GestureResponderEvent) => void;
  handleSelectaTask: (index: any, select: any) => void;
}

export default function TodoCards({
  selectAll = false,
  index,
  item,
  handleRemoveaTask,
  handleSelectaTask,
}: TodoCardsProp) {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (!firstLoad) {
      handleSelectaTask(index, !item.selected);
    } else {
      handleSelectaTask(index, item.selected);
      setFirstLoad(false);
    }
  }, [selectAll]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowView}>
        <View style={styles.header}>
          <Text style={styles.headerText}># {index + 1}</Text>
        </View>
        <TouchableOpacity
          style={styles.header}
          onPress={() => {
            handleRemoveaTask(item.id);
          }}>
          <IconAssets.CloseWhite height={moderateScale(20)} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() => {
          handleSelectaTask(index, !item.selected);
        }}>
        <SizedBox height={moderateScale(10)} />
        <View style={styles.contentContainer}>
          <View style={styles.rowView}>
            <Text style={styles.nameText}>Task Name:</Text>
            <Text style={styles.nameText}>{item.name}</Text>
          </View>
          <SizedBox height={moderateScale(10)} />
          <View>
            <Text style={styles.nameText} numberOfLines={4}>
              Task Description:{' '}
              <Text style={styles.description} numberOfLines={2}>
                {item.description}
              </Text>
            </Text>
            <SizedBox height={moderateScale(5)} />
          </View>
        </View>
        {item.selected && (
          <View style={styles.overlay}>
            <IconAssets.Select
              height={moderateScale(40)}
              width={moderateScale(40)}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'center',
    width: moderateScale(DEVICE.DEVICE_Width / 1.15),
  },
  header: {
    borderTopRightRadius: moderateScale(5),
    borderTopLeftRadius: moderateScale(5),
    height: moderateScale(25),
    minWidth: '30%',
    paddingVertical: moderateScale(3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  headerText: {
    fontSize: FONTS_SIZE.font16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.white,
  },
  cardContent: {
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    borderRadius: moderateScale(5),
    height: moderateScale(DEVICE.DEVICE_Height / 6),
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
  rowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.commongrey,
  },
  description: {
    fontSize: FONTS_SIZE.font12,
    fontFamily: FONTS.REGULAR,
    color: COLORS.commonText,
  },
  contentContainer: {
    padding: moderateScale(10),
  },
  overlay: {
    borderTopLeftRadius: moderateScale(0),
    borderTopRightRadius: moderateScale(0),
    borderRadius: moderateScale(5),
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
