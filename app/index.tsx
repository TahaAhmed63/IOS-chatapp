// app/index.ts
import React from 'react';
import { registerRootComponent } from 'expo';
import AppNavigator from './AppNavigator';

// The entry point of the app
const App: React.FC = () => {
  return <AppNavigator />;
};

// Register the root component for Expo
registerRootComponent(App);
