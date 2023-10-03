import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { Alert, Dimensions, PermissionsAndroid, StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerLayout from './src/screens/DrawerLayout';
import SplashScreen from 'react-native-splash-screen';
import VideoScreen from './src/screens/VideoScreen';
import RadioScreen from './src/screens/RadioScreen';
// import TrackPlayer, { State } from 'react-native-track-player';

const App = () => {
  const requestCameraPermission = async () => {

    try {

      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,


        ]
      );
      if (granted['android.permission.ACCESS_MEDIA_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED) {
        // Alert.alert("You can use the location")
      } else {
        Alert.alert("Location permission denied");
      }

      if (granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
        // Alert.alert("You can use the location")
      } else {
        Alert.alert("Read external storage permission denied");
      }
      if (granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED) {
        // Alert.alert("You can use the location")
      } else {
        Alert.alert("Read external storage permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {

    SplashScreen.hide();
    requestCameraPermission();

  }, []);
  const { width, height } = Dimensions.get('window');

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor='#f73d02'
      />
      <Stack.Navigator initialRouteName="drawer"
        screenOptions={{
          animation: 'slide_from_right', // Utilisez l'animation de slide de côté à côté
        }}
      >
        <Stack.Screen name="drawer" component={DrawerLayout} options={{ headerShown: false }} />
        <Stack.Screen name="video" component={VideoScreen} options={{ headerShown: false}} />
        <Stack.Screen name="radio" component={RadioScreen} options={{ headerShown: true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
