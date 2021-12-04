import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { Layout } from '@ui-kitten/components';
import { useColorValue } from '@app/hooks';
import AuthNavigation from './auth/auth-navigation';


const AppNavigator = () => {
    const backgroundColor = useColorValue('background-basic-color-4');
    const theme = useTheme();
    return (
        <NavigationContainer theme={{ ...theme, colors: { ...theme.colors, background: backgroundColor } }}>
            <Layout style={{ height: '100%' }}>
                <AuthNavigation />
            </Layout>
        </NavigationContainer>
    )
}


export default AppNavigator;