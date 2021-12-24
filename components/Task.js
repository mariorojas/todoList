import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 15,
  },
  itemLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    height: 24,
    marginRight: 15,
    opacity: 0.4,
    width: 24,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    borderColor: '#55BCF6',
    borderRadius: 5,
    borderWidth: 2,
    height: 12,
    width: 12,
  }
});

export default Task;