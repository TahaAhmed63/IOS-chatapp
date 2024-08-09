import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; // Use any icon library you prefer
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './Homescreen';
import { NavigationContainer } from '@react-navigation/native';

const menuItems = [
  { id: '3', name: 'CAMERA'},

  { id: '1', name: 'STATUS'},
  { id: '2', name: 'CHATS' },

  // Add more items as needed
];
const Tab = createBottomTabNavigator();

const CustomDrawerContent = (props) => {
  const [collapsed, setCollapsed] = useState(true); // Start in the collapsed state
  const [widthAnim] = useState(new Animated.Value(60)); // Initial drawer width set to collapsed

  const toggleCollapse = () => {
    const toValue = collapsed ? 240 : 80; // Expanded width vs collapsed width
    Animated.timing(widthAnim, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setCollapsed(!collapsed);
  };
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { width: widthAnim }]}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
          <Ionicons
            name={collapsed ? 'settings-outline' : 'settings-outline'}
            size={44}
            color="#fff"
          />
        </TouchableOpacity>

        <FlatList
          data={menuItems}
          style={styles.list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(item.name);
              }}
              style={styles.menuItem}
            >
           
              { <Text style={styles.menuText}>{item.name}</Text>}
            </TouchableOpacity>
          )}
        />
       
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27326b', // Dark blue background
      // overflow:'visible'
    },
    drawerContainer: {
      flex: 1,
      paddingTop: 40,
    },
    toggleButton: {
      alignItems: 'center',
      marginBottom: 20,
      borderRadius: 50, // Added to make the top rounded
      padding: 10,
      zIndex: 10,
      position: 'absolute',
      top: 0,
      left: 40,
      backgroundColor: '#27326b'
    },
    list:{

        display:'flex',
        gap:319,

    },
    menuItem: {
        flexDirection: 'column', // Change to column for vertical layout
        alignItems: 'flex-start', // Align items to the start (top)
        paddingVertical: 10,
        transform: 'rotate(266deg)',
gap:319,
display:'flex',
      
        justifyContent:'space-between',
        paddingHorizontal: 20, // Adjust padding as needed
        borderBottomWidth: 1,
        marginBottom: 20,
        borderBottomColor: '#4E5D7B',
    },
    menuIcon: {
      marginRight: 20,
    },
    menuText: {
      color: '#fff',
      fontSize: 16,
display:'flex',
gap:319

    },
  });
  

export default CustomDrawerContent;
