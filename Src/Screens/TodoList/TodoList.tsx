import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../Constants/colors';

export default function TodoList() {
  return (
    <View style={styles.container}>
      <Text>TodoList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});
