import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

interface ChatItem {
  id: string;
  name: string;
  message: string;
  lastSeen: string;
}

const DATA: ChatItem[] = [
  { id: '1', name: 'Profile Name', message: 'Hi This is message', lastSeen: 'Last Seen' },
  // Add other chat items similarly
];

export default function ChatListScreen() {
  const renderItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.avatar} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.lastSeen}>{item.lastSeen}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Let's Talk Tech</Text>
        <Text style={styles.headerSubtitle}>never ending chats...</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#27326b',
    fontSize: 24,
    zIndex:-1,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#27326b',
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007BFF',
    marginRight: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
  message: {
    fontSize: 16,
    color: '#888',
  },
  lastSeen: {
    fontSize: 14,
    color: '#888',
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 56,
    height: 56,
    backgroundColor: '#3f51b4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
