import {Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {DEVICE} from '../../Calibration/Device';

import SizedBox from '../../Components/SizedBox';
import IconAssets from '../../Assets/Icons';
import {FlatList} from 'react-native-gesture-handler';
import {Transition, Transitioning} from 'react-native-reanimated';
import EachTasks from './components/EachTasks';
import {styles} from './style/styles';
import {connect} from 'react-redux';
import {fetchToDo} from '../../Redux/todos/actions';
import LoadingModal from '../../Components/loadingModal';
const transition = (
  <Transition.Together>
    <Transition.In type="slide-right" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="slide-left" durationMs={200} />
  </Transition.Together>
);

const HomeScreen = (props: any) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    props.fetchToDo();
  }, []);

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
      <LoadingModal visible={props.loading} />
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
        <Transitioning.View ref={ref} transition={transition}>
          {show && (
            <View
              style={{
                paddingVertical: moderateScale(10),
                height:
                  props.data.length > 9
                    ? moderateScale(DEVICE.DEVICE_Height / 2.4)
                    : moderateScale(DEVICE.DEVICE_Height / 2.4),
              }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={renderTasks}
              />
            </View>
          )}
        </Transitioning.View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const {data, loading} = state.TODO;
  return {data, loading};
};

const mapDispatchtoProps = {
  fetchToDo,
};

export default connect(mapStateToProps, mapDispatchtoProps)(HomeScreen);
