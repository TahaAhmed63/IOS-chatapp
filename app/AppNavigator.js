// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhoneNumberinputScreen from './PhoneNumberInputScreen';
import Homescreen from './Homescreen';
import ChatListScreen  from './ChatlistScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
// import { NavigationContainer } from '@react-navigation/native';
// import ChatListScreen from './ChatListScreen'; // Import other screens as needed
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import ChatLayout from './ChatLayout';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {


  return (
    <NavigationContainer>
    <Drawer.Navigator
        initialRouteName="ChatList"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: '#2A2E43',
          },
        }}
      >
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="PhoneNumber" component={PhoneNumberinputScreen} />
      <Drawer.Screen name="chatlist" component={ChatLayout} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};


export default AppNavigator;
