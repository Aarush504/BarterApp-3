import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import SignUpScreen from './screens/SignUpScreeen';
import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignUpScreen:{screen:SignUpScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer= createAppContainer(switchNavigator);
