import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <Text>Settings</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
