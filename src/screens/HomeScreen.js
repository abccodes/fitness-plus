import {useNavigation} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {auth} from '../../firebase';
import firebase from 'firebase/compat/app';
import {collection, addDoc, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';

function HomeScreen() {
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };

  const getUserData = async () => {
    setEmail(auth.currentUser.email);
    const usersRef = db.collection('users');
    const test = await usersRef.where('email', '==', email).get();

    if (test.empty) {
      console.log('No matching documents.');
      return;
    }

    test.forEach(doc => {
      setFirst(doc.data().first);
      setLast(doc.data().last);
    });
  };

  useEffect(() => {
    getUserData();
  });

  return (
    <View style={styles.container}>
      <Text>Email: {email}</Text>
      <Text>First Name: {first}</Text>
      <Text>Last Name: {last}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

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
