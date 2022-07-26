import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../Constants/colors';
import {moderateScale} from 'react-native-size-matters';
import SizedBox from '../../Components/SizedBox';
import FONTS from '../../Constants/fonts';
import FONTS_SIZE from '../../Constants/fontSize';
import Header from './components/Header';
import uuid from 'react-native-uuid';
import TodoCards from './components/TodoCards';

export interface todo {
  name: string;
  description: string;
  id: any;
  selected: boolean;
}

interface todoHolder {
  item: todo;
}

export default function AddTodo() {
  const [selectAll, setSelectAll] = useState(false);
  const [tasks, setTask]: todo = useState([]);

  const handleAddTodos = (name: string, description: string) => {
    const todo: todo = {
      name: name,
      description: description,
      id: uuid.v4(),
      selected: false,
    };
    setTask([...tasks, todo]);
  };

  const handleClearTodos = () => {
    setTask([]);
  };

  const handleRemoveaTask = id => {
    const newtodo = tasks.filter(item => item.id != id);
    setTask(newtodo);
  };

  const handleSelectaTask = (index, select) => {
    const currentTodo = [...tasks];
    currentTodo[index].selected = select;
    setTask(currentTodo);
  };

  const handleDelete = () => {
    const newtodo = tasks.filter(item => item.selected != true);
    setTask(newtodo);
    setSelectAll(false);
  };

  const handleSave = () => {
    const newtodo = tasks.filter(item => item.selected != true);
    const selectedTodo = tasks.filter(item => item.selected == true);
    console.log(selectedTodo);
    setTask(newtodo);
    setSelectAll(false);
  };

  const renderTasks = ({item, index}) => {
    return (
      <TodoCards
        selectAll={selectAll}
        index={index}
        item={item}
        handleSelectaTask={handleSelectaTask}
        handleRemoveaTask={handleRemoveaTask}
      />
    );
  };

  const renderButtons = () => {
    return (
      <>
        <SizedBox height={moderateScale(10)} />
        {tasks.length >= 1 && (
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.giveup} onPress={handleDelete}>
              <Text style={styles.headerText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.complete} onPress={handleSave}>
              <Text style={styles.headerText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
        <SizedBox height={moderateScale(10)} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          ListFooterComponent={renderButtons}
          ItemSeparatorComponent={() => <SizedBox height={moderateScale(20)} />}
          ListHeaderComponent={
            <Header
              selectAll={selectAll}
              setSelectAll={setSelectAll}
              handleAddTask={handleAddTodos}
              handleClearTask={handleClearTodos}
            />
          }
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={renderTasks}
        />
        <SizedBox height={moderateScale(20)} />
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
    backgroundColor: COLORS.white,
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
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.white,
    fontSize: FONTS_SIZE.font14,
    fontFamily: FONTS.REGULAR,
    letterSpacing: 0.5,
  },
});
