// app/index.ts
import React from 'react';
import { registerRootComponent } from 'expo';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PhoneNumberinputScreen from './PhoneNumberInputScreen';
import ChatListScreen  from './ChatlistScreen';


// import { Stack } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import PhoneNumberVerificationScreen from '@/screens/PhoneNumberVerificationScreen';
const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return <>
  
  <AppNavigator />
  </>;
};

// Register the root component for Expo
registerRootComponent(App);


