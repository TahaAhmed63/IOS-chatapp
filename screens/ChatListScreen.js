// screens/ChatListScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', name: 'Profile Name', message: 'Hi! This is message', lastSeen: 'Last Seen' },
  { id: '2', name: 'Profile Name', message: 'Hi! This is message', lastSeen: 'Last Seen' },
  // Add more dummy data here...
];

export default function ChatListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.avatar} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.lastSeen}>{item.lastSeen}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007BFF',
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
  },
  message: {
    color: '#666666',
  },
  lastSeen: {
    color: '#999999',
  },
});
