import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import SignUpScreen from './screens/SignUpScreeen';
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignUpScreen:{screen:SignUpScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer= createAppContainer(switchNavigator);
