import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREEN_CONSTANT from '../Constants/SCREEN_CONSTANT';
import HomeScreen from '../Screens/Home/HomeScreen';
import COLORS from '../Constants/colors';
import IconAssets from '../Assets/Icons';
import CustomTabItem from '../Components/CustomTabsItem';
import {Platform} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import TodoList from '../Screens/TodoList/TodoList';
import AddTodo from '../Screens/AddTodo/AddTodo';
import Setting from '../Screens/Setting/Setting';
const tabs = createBottomTabNavigator();

export default function TabsNavigation() {
  return (
    <tabs.Navigator
      initialRouteName={SCREEN_CONSTANT.home}
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          color: COLORS.white,
        },
        headerStyle: {
          borderBottomRightRadius: moderateScale(2),
          borderBottomLeftRadius: moderateScale(2),
          backgroundColor: COLORS.primary,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 75 : 60,
          backgroundColor: '#FFFFFF',
        },
      }}>
      <tabs.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Home"
              icon={
                <IconAssets.Home
                  width={focused ? moderateScale(30) : moderateScale(25)}
                  height={focused ? moderateScale(30) : moderateScale(25)}
                />
              }
            />
          ),
        }}
        name={SCREEN_CONSTANT.home}
        component={HomeScreen}
      />
      <tabs.Screen
        options={{
          title: 'TodoList',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="ToDos"
              icon={
                <IconAssets.Document
                  width={focused ? moderateScale(30) : moderateScale(25)}
                  height={focused ? moderateScale(30) : moderateScale(25)}
                />
              }
            />
          ),
        }}
        name={SCREEN_CONSTANT.todolist}
        component={TodoList}
      />
      <tabs.Screen
        options={{
          title: 'AddTodo',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Add"
              icon={
                <IconAssets.Plus
                  width={focused ? moderateScale(30) : moderateScale(25)}
                  height={focused ? moderateScale(30) : moderateScale(25)}
                />
              }
            />
          ),
        }}
        name={SCREEN_CONSTANT.addtodo}
        component={AddTodo}
      />
      <tabs.Screen
        options={{
          title: 'Setting',
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              focused={focused}
              label="Setting"
              icon={
                <IconAssets.Setting
                  width={focused ? moderateScale(30) : moderateScale(25)}
                  height={focused ? moderateScale(30) : moderateScale(25)}
                />
              }
            />
          ),
        }}
        name={SCREEN_CONSTANT.setting}
        component={Setting}
      />
    </tabs.Navigator>
  );
}
