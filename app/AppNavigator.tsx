// AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PhoneNumberinputScreen from './PhoneNumberInputScreen';
import Homescreen from './Homescreen';
import ChatListScreen  from './ChatlistScreen';
// import ChatListScreen from './ChatListScreen'; // Import other screens as needed

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
  <Stack.Navigator  screenOptions={{
    headerShown: false
  }} initialRouteName="Homescreen">
  <Stack.Screen options={{headerShown: false}} name="Homescreen" component={Homescreen} />
  <Stack.Screen options={{headerShown: false}} name="PhoneNumber" component={PhoneNumberinputScreen} />
  <Stack.Screen options={{headerShown: false}} name="chatlist" component={ChatListScreen} />



        {/* <Stack.Screen name="ChatList" component={ChatListScreen} /> */}
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
