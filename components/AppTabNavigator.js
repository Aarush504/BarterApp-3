import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ItemRequestScreen from '../screens/ItemRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    RequestItems : {
        screen: ItemRequestScreen,
        navigationOptions:{
            tabBarLabel : "Request Items"
        }
    }
});