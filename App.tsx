/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './src/page/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import Layout from './src/Layout';
import Question1 from './src/page/Question1';
import CompleteQuestion from './src/page/CompleteQuestion';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <Question1 />
    // </SafeAreaView>
    <NavigationContainer>
      {/* <Layout /> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
          component = {Dashboard}
          options={{headerShown: false}} 
        />
        <Stack.Screen name="BlockM"
          component = {Question1}
          options={{headerShown: false}} 
          initialParams={{ param: 0}}
        />
        <Stack.Screen name="BlockM2"
          component = {Question1}
          options={{headerShown: false}} 
          initialParams={{ param: 1}}
        />
        <Stack.Screen name="BlockM3"
          component = {Question1}
          options={{headerShown: false}} 
          initialParams={{ param: 2}}
        />
        <Stack.Screen name="BlockM4"
          component = {Question1}
          options={{headerShown: false}} 
          initialParams={{ param: 3}}
        />
        <Stack.Screen name="CompleteQuestion"
          component = {CompleteQuestion}
          options={{headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
