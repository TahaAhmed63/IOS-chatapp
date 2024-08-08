import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons for sidebar

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
      {/* Sidebar Menu */}
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.sidebarIcon}>
          <Ionicons name="ios-chatbubbles-outline" size={24} color="#fff" />
          <Text style={styles.sidebarText}>CHATS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarIcon}>
          <Ionicons name="ios-people-outline" size={24} color="#fff" />
          <Text style={styles.sidebarText}>STATUS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarIcon}>
          <Ionicons name="ios-camera-outline" size={24} color="#fff" />
          <Text style={styles.sidebarText}>CAMERA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsIcon}>
          <Ionicons name="ios-settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.chatListContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#131C21',
  },
  sidebar: {
    width: 70,
    backgroundColor: '#1A73E8',
    alignItems: 'center',
    paddingVertical: 20,
  },
  sidebarIcon: {
    marginBottom: 40,
    alignItems: 'center',
  },
  sidebarText: {
    fontSize: 10,
    color: '#fff',
    marginTop: 5,
  },
  settingsIcon: {
    position: 'absolute',
    top: 10,
    alignItems: 'center',
  },
  chatListContainer: {
    flex: 1,
    backgroundColor: '#131C21',
  },
  header: {
    padding: 20,
    backgroundColor: '#075E54',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#fff',
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
  itemTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#fff',
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
    backgroundColor: '#25D366',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
