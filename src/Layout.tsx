import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NativeRouter, Route, Routes} from 'react-router-native';
import Dashboard from './page/Dashboard';
import Question1 from './page/Question1';

const Stack = createNativeStackNavigator();

function Layout() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home"
        component = {Dashboard}
        options={{headerShown: false}} 
      />
      <Stack.Screen name="Question1"
        component = {Question1}
        options={{headerShown: false}} 
      />
      {/* <Stack.Screen name="BlackM2"
        component = {Question1}
        options={{headerShown: false}} 
      />
      <Stack.Screen name="Question2"
        component = {Question1}
        options={{headerShown: false}} 
      />
      <Stack.Screen name="Question3"
        component = {Question1}
        options={{headerShown: false}} 
      /> */}
    </Stack.Navigator>
  )
}

export default Layout;