import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../Constants/colors';
import {moderateScale} from 'react-native-size-matters';
import IconAssets from '../../Assets/Icons';
import SizedBox from '../../Components/SizedBox';
import {DEVICE} from '../../Calibration/Device';
import FONTS from '../../Constants/fonts';
import FONTS_SIZE from '../../Constants/fontSize';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import Header from './components/Header';

export default function AddTodo() {
  const [tasks, setTask] = useState([]);

  const renderTasks = ({item}) => {
    return (
      <View>
        <Text></Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          ListHeaderComponent={<Header />}
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={renderTasks}
        />
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
    backgroundColor: COLORS.white,
    marginTop: moderateScale(10),
    alignItems: 'center',
  },
});
