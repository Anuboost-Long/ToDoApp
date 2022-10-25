import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const APP_NAME = 'MBus User';

export const saveTodo = obj => {
  console.log(obj);
  AsyncStorage.setItem('All_Todo', JSON.stringify(obj));
};

export const getTodo = async () => {
  const todos = await AsyncStorage.getItem('All_Todo');
  if (todos) {
    return todos;
  }
  return '';
};

export const showLog = (data: any, ...optionalParams: any[]) => {
  if (__DEV__) {
    console.log(data, ...optionalParams);
  }
};

export function showAlert(msg: string) {
  Alert.alert(
    APP_NAME,
    '' + msg,
    [
      {
        text: 'OK',
        onPress: () => {},
      },
    ],
    {
      cancelable: false,
    },
  );
}

export function saveData(
  key: string,
  detail: any,
  success = (item: any) => {},
  failure = (item: any) => {},
) {
  AsyncStorage.setItem(key, JSON.stringify(detail)).then(
    data => success(data),
    fail => failure(fail),
  );
}
