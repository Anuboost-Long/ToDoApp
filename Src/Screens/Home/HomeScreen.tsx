import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import COLORS from '../../Constants/colors';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../Calibration/Device';
import FONTS_SIZE from '../../Constants/fontSize';
import FONTS from '../../Constants/fonts';
import SizedBox from '../../Components/SizedBox';
import IconAssets from '../../Assets/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {Transition, Transitioning} from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type="slide-right" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="slide-left" durationMs={200} />
  </Transition.Together>
);

export default function HomeScreen() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);
  const todos = [
    {title: 'Code', id: 1, status: 'Not Completed'},
    {title: 'Game', id: 2, status: 'Not Completed'},
    {title: 'Think About Life', id: 3, status: 'Not Completed'},
    {title: 'Kill Someone', id: 4, status: 'Not Completed'},
    {title: 'One Eye Snake', id: 5, status: 'Not Completed'},
    {title: 'Code', id: 6, status: 'Not Completed'},
    {title: 'Game', id: 7, status: 'Not Completed'},
    {title: 'Think About Life', id: 8, status: 'Not Completed'},
    {title: 'Kill Someone', id: 9, status: 'Not Completed'},
    {title: 'One Eye Snake', id: 10, status: 'Not Completed'},
  ];

  const renderTasks = ({item}) => {
    return (
      <>
        <SizedBox height={moderateScale(10)} />
        <TouchableOpacity activeOpacity={0.8} style={styles.todoContainer}>
          <Text style={styles.todoText}>{item.title}</Text>
        </TouchableOpacity>
        <SizedBox height={moderateScale(10)} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* this is my welcome Holder  */}
        <View style={styles.WelcomeHolder}>
          <Text style={styles.WelcomeText}>Welcome Back !!!</Text>
          <SizedBox height={moderateScale(10)} />
          <Text style={styles.NormalText}>Ready for some task ?</Text>
        </View>
        <SizedBox height={moderateScale(10)} />
        {/* this is my dashboard */}
        <View style={styles.dashboard}>
          <View style={styles.stats}>
            <Text style={styles.StatsTitle}>All ToDos</Text>
            <SizedBox height={moderateScale(10)} />
            <Text style={styles.StatsValue}>100</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.StatsTitle}>Completed</Text>
            <SizedBox height={moderateScale(10)} />
            <Text style={styles.StatsValue}>100</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.StatsTitle}>ToDo Left</Text>
            <SizedBox height={moderateScale(10)} />
            <Text style={styles.StatsValue}>100</Text>
          </View>
        </View>
        <SizedBox height={moderateScale(10)} />
        {/* this is the today task  */}
        <Transitioning.View ref={ref} transition={transition}>
          <TouchableOpacity
            style={styles.TodayTask}
            activeOpacity={0.8}
            onPress={() => {
              ref.current.animateNextTransition();
              setShow(!show);
            }}>
            <View style={styles.rowView}>
              <Text style={styles.TitleText}>Your Task Today </Text>
              {show ? (
                <IconAssets.CloseWhite
                  width={moderateScale(25)}
                  height={moderateScale(25)}
                />
              ) : (
                <IconAssets.MenuWhite
                  width={moderateScale(25)}
                  height={moderateScale(25)}
                />
              )}
            </View>
          </TouchableOpacity>
          {show && (
            <View
              style={{
                height:
                  todos.length > 9
                    ? moderateScale(DEVICE.DEVICE_Height / 2.4)
                    : moderateScale(DEVICE.DEVICE_Height / (9 - todos.length)),
              }}>
              <SizedBox height={moderateScale(10)} />
              <FlatList
                showsVerticalScrollIndicator={false}
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={renderTasks}
              />
            </View>
          )}
        </Transitioning.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    letterSpacing: moderateScale(1),
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
