import { useNavigation } from '@react-navigation/core';
import { DrawerNavigationOptions, DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';
import { Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';


interface HeaderProps {
    title: string,
    back?: boolean
}


const Header = ({ title, back }: HeaderProps) => {

    const drawerNavigation = useNavigation<DrawerNavigationProp<any>>();
    const stackNavigator = useNavigation<StackNavigationProp<any>>();


    const BackIcon = (props: any) => {
        return <Icon name='arrow-back' {...props} />
    }

    const Hamburger = (props: any) => {
        return <Icon name='menu-outline' {...props} />
    }

    return (
        <Layout>
            <TopNavigation
                alignment='center'
                title={
                    (props) => <Text
                        {...props}
                        category={'h4'}
                        style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
                }
                accessoryLeft={
                    (props) => <TopNavigationAction
                        onPress={() => {
                            if (back) {
                                stackNavigator.goBack()
                            } else {
                                drawerNavigation.toggleDrawer();
                            }
                        }}
                        icon={back ? BackIcon : Hamburger}
                    />
                } />
        </Layout>
    )
}

export default Header;