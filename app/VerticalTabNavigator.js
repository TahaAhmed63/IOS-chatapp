    // import * as React from 'react';
    // import { View, Text, StyleSheet } from 'react-native';
    // import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

    // // Define the screens for the tabs
    // const ChatScreen = () => (
    // <View style={styles.scene}>
    //     <Text>Chat Screen</Text>
    // </View>
    // );

    // const StatusScreen = () => (
    // <View style={styles.scene}>
    //     <Text>Status Screen</Text>
    // </View>
    // );

    // const CameraScreen = () => (
    // <View style={styles.scene}>
    //     <Text>Camera Screen</Text>
    // </View>
    // );

    // // Define the routes for the TabView
    // const routes = [
    // { key: 'chat', title: 'Chat' },
    // { key: 'status', title: 'Status' },
    // { key: 'camera', title: 'Camera' },
    // ];

    // // Map each route to its respective screen
    // const renderScene = SceneMap({
    // chat: ChatScreen,
    // status: StatusScreen,
    // camera: CameraScreen,
    // });

    // const VerticalTabNavigator = () => {
    // const [index, setIndex] = React.useState(0);
    
    // return (
    //     <TabView
    //     navigationState={{ index, routes }}
    //     renderScene={renderScene}
    //     onIndexChange={setIndex}
    //     initialLayout={{ width: 80 }}
    //     renderTabBar={(props) => (
    //         <TabBar
    //         {...props}
    //         scrollEnabled
    //         indicatorStyle={{ backgroundColor: '#fff', width: 4 }} // Indicator styling
    //         style={styles.tabbar}
    //         tabStyle={styles.tabStyle}
    //         labelStyle={styles.labelStyle}
    //         />
    //     )}
    //     tabBarPosition="left"
    //     swipeEnabled={false} // Disables swipe if you only want click-based navigation
    //     />
    // );
    // };

    // const styles = StyleSheet.create({
    // scene: {
    //     // flex: 1,
    //     display:'flex',
    //     flexWrap:"nowrap",
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#f2f2f2',
    // },
    // tabbar: {
    //     // backgroundColor: '#2A2E43',
    //     width: 20,
    // },
    // tabStyle: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     height: 10,
    // },
    // labelStyle: {
    //     fontSize: 14,
    //     margin: 0,
    //     color: '#fff',
    // },
    // });

    // export default VerticalTabNavigator;
