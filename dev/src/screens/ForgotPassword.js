import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {auth} from '../../firebase';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.replace('Login');
  };

  //   const handleSignOut = () => {
  //     auth
  //       .signOut()
  //       .then(() => {
  //         navigation.replace('Login');
  //       })
  //       .catch(error => alert(error.message));
  //   };

  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonOutline]}
        onPress={handleBack}
      >
        <Text style={styles.buttonOutlineText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
