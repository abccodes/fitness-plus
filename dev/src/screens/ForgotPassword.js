import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {auth} from '../../firebase';
import {firebase} from 'firebase/compat/app';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.replace('Login');
  };

  const changePassword = () => {
      auth.sendPasswordResetEmail(email).then(() => {
        alert('Password reset email sent');
      })
      .catch(error => {
        alert(error);
      });
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
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={changePassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleBack}
        >
          <Text style={styles.buttonOutlineText}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={handleBack}
        >
            <Text style={styles.buttonOutlineText}>Back</Text>
        </TouchableOpacity> */}
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
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    padding: 15,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 700,
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: 700,
    fontSize: 16,
  },
});
