import {StackActions} from '@react-navigation/native';
import React from 'react';

export const isMountedRef = React.createRef();

export const navigationRef = React.createRef<any>();

export const isReadyRef = React.createRef();

interface NavParams {
  name: string;
  params?: Object;
}

// Only Use this if you don't have access to navigation. i.e Saga
class NavigationHelper {
  static instance() {
    return navigationRef.current;
  }

  static navigate({name, params = {}}: NavParams) {
    if (!navigationRef.current) return;
    navigationRef.current.navigate(name, params);
  }

  static getCurrentRouteName() {
    return navigationRef.current.getCurrentRoute().name;
  }

  static push({name, params = {}}: NavParams) {
    if (!navigationRef.current) return;
    navigationRef.current.dispatch(StackActions.push(name, params));
  }

  static replace({name, params = {}}: NavParams) {
    if (!navigationRef.current) return;
    navigationRef.current.dispatch(StackActions.popToTop());
    navigationRef.current.dispatch(StackActions.replace(name, params));
  }

  static back() {
    if (!navigationRef.current) return;
    navigationRef.current.goBack();
  }

  static reset({name, params = {}}: NavParams) {
    if (!navigationRef.current) return;
    navigationRef.current.dispatch(StackActions.replace(name, params));
  }

  static pop(n: number) {
    if (!navigationRef.current) return;
    navigationRef.current.pop(n);
  }
}

export default NavigationHelper;
