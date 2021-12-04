import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from '..';

const StackNavigation = createStackNavigator();

const AuthNavigation = () => {
    return (
        <StackNavigation.Navigator initialRouteName={'home'} screenOptions={{
            headerShown: false
        }}>
            <StackNavigation.Screen name='home' component={DrawerNavigator} />
        </StackNavigation.Navigator>
    )
}

export default AuthNavigation;