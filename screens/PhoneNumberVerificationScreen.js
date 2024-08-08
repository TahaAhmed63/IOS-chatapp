// screens/PhoneNumberVerificationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PhoneNumberVerificationScreen({ navigation }) {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the code sent to your phone</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
        placeholder="123456"
      />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('ChatList')}
        color="#007BFF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
