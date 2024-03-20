import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Home, Bookmarks, Notifications, Sidemenu, Social } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absoulute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#fff'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 30 : 60,
                  alignItems: "center", justifyContent: 'center'
                }} backgroundColor={focused ? '#048345' : '#fff'}>
                  <Feather name="home" size={24} color={focused ? '#fff' : '#048345'} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 30 : 60,
                  alignItems: "center", justifyContent: 'center'
                }} backgroundColor={focused ? '#048345' : '#fff'}>
                  <Feather name="book-open" size={24} color={focused ? '#fff' : '#048345'} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Social"
          component={Social}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 30 : 60,
                  alignItems: "center", justifyContent: 'center'
                }} backgroundColor={focused ? '#048345' : '#fff'}>
                  <Feather name="users" size={24} color={focused ? '#fff' : '#048345'} />
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 30 : 60,
                  alignItems: "center", justifyContent: 'center'
                }} backgroundColor={focused ? '#048345' : '#fff'}>
                  <Ionicons name="notifications-outline" size={24} color={focused ? '#fff' : '#048345'} />
                  <View style={{position: 'absolute', right: 25, top: 10, borderRadius: 10, width: 17, height: 17,backgroundColor: '#FF8900' }}>
                    <Text style={{fontSize:12, fontWeight:'bold', color: '#fff',left:4}}>3</Text>
                  </View>
                </View>
              )
            }
          }}
        />
        <Tab.Screen
          name="Sidemenu"
          component={Sidemenu}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{
                  width: Platform.OS == "ios" ? 70 : 80,
                  height: Platform.OS == "ios" ? 30 : 60,
                  alignItems: "center", justifyContent: 'center'
                }} backgroundColor={focused ? '#048345' : '#fff'}>
                  <MaterialIcons name="menu" size={24} color={focused ? '#fff' : '#048345'} />
                </View>
              )
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

