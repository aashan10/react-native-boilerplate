import { ChangeLanguage, ChangeTheme, SettingsPage } from '@app/pages';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Navigator = createStackNavigator();

const SettingsNavigator = () => {
    return (
        <Navigator.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName={'settings-home'}>
            <Navigator.Screen component={SettingsPage} name={'settings-home'} />
            <Navigator.Screen component={ChangeTheme} name='change-theme' />
            <Navigator.Screen component={ChangeLanguage} name='change-language' />
        </Navigator.Navigator>
    )
}

export default SettingsNavigator;