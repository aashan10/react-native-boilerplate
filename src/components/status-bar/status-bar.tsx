import { useTheme } from '@app/hooks';
import React from 'react';
import { StatusBar as NativeStatusBar, StatusBarProps } from 'react-native';

const StatusBar = (props: StatusBarProps) => {
    const theme = useTheme();
   
    return (
        <NativeStatusBar
            {...props}
            translucent 
            backgroundColor={'rgba(0,0,0,0)'} 
            barStyle={theme.accent === 'dark' ? 'light-content' : 'dark-content'} />
    )
}

StatusBar.currentHeight = NativeStatusBar.currentHeight;


export default StatusBar;