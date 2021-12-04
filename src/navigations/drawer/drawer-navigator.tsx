import { Drawer } from '@app/components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { SettingsNavigator } from '..';

const Navigator = createDrawerNavigator();



const DrawerNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{
            headerShown: false
        }} drawerContent={(props) => {
            return <Drawer {...props} />
        }}>
            <Navigator.Screen component={SettingsNavigator} name={'settings'} />
        </Navigator.Navigator>
    )
}

export default DrawerNavigator;