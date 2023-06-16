import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Stats() {
  return (
    <View>
      <TouchableOpacity>
        <Text>Stats Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
