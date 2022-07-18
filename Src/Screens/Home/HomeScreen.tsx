import {Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../Calibration/Device';

import SizedBox from '../../Components/SizedBox';
import IconAssets from '../../Assets/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {Transition, Transitioning} from 'react-native-reanimated';
import EachTasks from './components/EachTasks';
import {useEffect} from 'react';
import {styles} from './style/styles';

const transition = (
  <Transition.Together>
    <Transition.In type="slide-right" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="slide-left" durationMs={200} />
  </Transition.Together>
);

export default function HomeScreen() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const todos = [
    {
      title: 'Code',
      id: 1,
      status: 'Completed',
      description:
        'Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you',
    },
    {title: 'Game', id: 2, status: 'Completed', description: ''},
    {
      title: 'Think About Life',
      id: 3,
      status: 'Not Completed',
      description: '',
    },
    {title: 'Kill Someone', id: 4, status: 'Not Completed', description: ''},
    {title: 'One Eye Snake', id: 5, status: 'Not Completed', description: ''},
    {title: 'Depression', id: 6, status: 'Not Completed', description: ''},
    {title: 'Horny', id: 7, status: 'Not Completed', description: ''},
    {title: 'Jam koy', id: 8, status: 'Not Completed', description: ''},
    {title: 'Shower', id: 9, status: 'Not Completed', description: ''},
    {title: 'Fap and dek', id: 10, status: 'Not Completed', description: ''},
  ];

  const renderTasks = ({item}) => {
    return (
      <>
        <SizedBox height={moderateScale(10)} />
        <EachTasks item={item} />
        <SizedBox height={moderateScale(10)} />
      </>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      ref.current.animateNextTransition();
      setShow(true);
    }, 200);
  }, []);

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
                    : moderateScale(DEVICE.DEVICE_Height / (8 - todos.length)),
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
