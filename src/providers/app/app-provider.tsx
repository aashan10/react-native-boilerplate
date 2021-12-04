import React from 'react';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AppNavigator } from '@app/navigations';
import { Dimensions } from 'react-native';
import { StatusBar } from '@app/components';
import { ThemeProvider, ThemeConsumer } from '../theme/theme-provider';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { LanguageProvider } from '..';


const AppProvider = () => {
    const { height } = Dimensions.get('screen');
    const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight - 20 : 0;
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeProvider>
                <LanguageProvider>
                    <ThemeConsumer>
                        {
                            (context) => {
                                return (
                                    <ApplicationProvider {...eva} theme={context.theme}>
                                        <StatusBar />
                                        <Layout style={{ height: height, paddingTop: statusBarHeight }}>
                                            <AppNavigator />
                                        </Layout>
                                    </ApplicationProvider>
                                )
                            }
                        }
                    </ThemeConsumer>
                </LanguageProvider>
            </ThemeProvider>
        </>
    )
}

export default AppProvider;