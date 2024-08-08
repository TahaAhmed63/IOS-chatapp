import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function ConnectScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Let's Connect</Text>
      </View>
      <View style={styles.inputContainer}>
        {/* <Text style={styles.inputLabel}>Phone Number</Text> */}
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <Text style={styles.inputDescription}>
          We will share you SMS with confirmation code.
        </Text>
      </View>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('PhoneNumber')}>
        <Text style={styles.buttonText} >Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth:"100%",
    margin:0,
   

    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  inputDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  button: {
    backgroundColor: '109ACD',
    padding: 15,
    borderRadius: 15,
    marginTop:380,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});