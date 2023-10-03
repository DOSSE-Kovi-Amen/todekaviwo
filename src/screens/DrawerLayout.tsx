import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import {
  StatusBar,
  Text,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/AntDesign';
import IconMat2 from 'react-native-vector-icons/MaterialIcons';
import ContactScreen from './ContactScreen';
import PrivacyPolicyScreen from './PrivacyScreen';
import Radio from './RadioScreen';
import AboutScreen from './AboutScreen';
import { colors } from '../constants/colors';
import HomeScreen from './HomeScreen';


const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text style={{ fontSize: 16 }}>En cours de perfectionnement</Text>
      {/* <Button color={styles.mainColor} onPress={() => navigation.goBack()} title="Go back home" /> */}
    </View>
  );
}

const DrawerLayout = () => {
  useEffect(() => {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
  }, [])

  return (

    <Drawer.Navigator initialRouteName="tab"

      screenOptions={{
        headerTintColor: "black",
        headerShown: true,
        swipeEnabled: true,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
          elevation:15,
          height:70,
          // borderTopColor:'#ef5300',
          borderTopWidth: .5,
          // borderBottomColor:'black',
          borderBottomWidth:2,
        },

        drawerInactiveBackgroundColor: 'transparent',
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: colors.mainColor,
        drawerInactiveTintColor:'gray'

      }} >
      {/* <Drawer.Screen name="tab" component={TabLayout} options={{ headerStyle:{backgroundColor: colors.mainColor,borderBottomColor:'gold',borderBottomWidth:2,},title: 'Accueil', headerTitle: () => <Image style={{ height: 50, width: 65 }} source={require('../assets/logo.png')} />, drawerIcon: ({ focused, size }) => (<Icon color={focused ? colors.mainColor : 'gray'} name="home" size={size} />) }} /> */}
      <Drawer.Screen name="home" component={HomeScreen} options={{ headerTintColor:'red',headerStyle:{backgroundColor: 'white',elevation:10, borderBottomColor:'white',borderBottomWidth:2, height:75},title: 'Accueil', headerTitle: () => <Image style={{ height: 80, width: 80 }} source={require('../assets/logo.png')} />, drawerIcon: ({ focused, size }) => (<Icon color={focused ? colors.mainColor : 'gray'} name="home" size={size} />) }} />
      {/* <Drawer.Screen name="addpost" component={AddPostScreen} options={{ title: 'Ajouter un post', drawerIcon: ({ focused, size }) => (<Icon color={focused ? colors.mainColor : 'gray'} name="edit" size={size} />) }} /> */}
      <Drawer.Screen name="contact" component={ContactScreen} options={{ title: 'Contact', drawerIcon: ({ focused, size }) => (<Icon1 color={focused ? colors.mainColor : 'gray'} name="contacts" size={size} />) }} />
      {/* <Drawer.Screen name="vision" component={VisionScreen} options={{ title: 'Vision', drawerIcon: ({ focused, size }) => (<IconMat color={focused ? colors.mainColor : 'gray'} name="telescope" size={size} />) }} /> */}
      <Drawer.Screen name="about"  component={AboutScreen} options={{ title: 'A propos', drawerIcon: ({ focused, size }) => (<Icon color={focused ? colors.mainColor : 'gray'} name="info-circle" size={size} />) }} />
      <Drawer.Screen name="privacy"  component={PrivacyPolicyScreen } options={{ title: 'Politique', drawerIcon: ({ focused, size }) => (<IconMat2 color={focused ? colors.mainColor : 'gray'} name="privacy-tip" size={size} />) }} />

    </Drawer.Navigator>

  );
};



export default DrawerLayout;
