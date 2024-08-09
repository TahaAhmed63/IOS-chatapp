import React, { useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import CustomDrawerContent from './CustomDrawerContent'; // The drawer content
import ChatListScreen from './ChatlistScreen'; // Your chat screen
import { Ionicons } from '@expo/vector-icons'; // Or any icon library you use

const ChatLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [widthAnim] = useState(new Animated.Value(80)); // Collapsed width

  const toggleCollapse = () => {
    const toValue = collapsed ? 240 : 80; // Toggle between expanded and collapsed
    Animated.timing(widthAnim, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setCollapsed(!collapsed);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.drawer, { width: widthAnim }]}>
        <CustomDrawerContent collapsed={collapsed} />
        {/* <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
          <Ionicons
            name={collapsed ? 'settings-outline' : 'settings-outline'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity> */}
      </Animated.View>
      
      <View style={styles.content}>
        <ChatListScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  drawer: {
    backgroundColor: '', // Dark blue background
    overflow: 'visible',
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: -12, // Position it on the border between drawer and content
    backgroundColor: '#4E5D7B',
    padding: 5,
    borderRadius: 15,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the main content
  },
});

export default ChatLayout;
