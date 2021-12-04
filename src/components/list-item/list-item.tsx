import React, { FC, ReactElement } from 'react';
import { Icon, ListItem as UIListItem, Text } from '@ui-kitten/components';
import { Alert, View } from 'react-native';
interface ListItemProps {
    onPress: CallableFunction,
    isFirstItem?: boolean | false,
    isLastItem?: boolean | false,
    title: string,
    isSelected?: boolean | false,
    icon: string | false
}

const ListItem = ({ isLastItem, isFirstItem, isSelected, onPress, title, icon }: ListItemProps) => {

    const Accessory = (props: any) => {
        return <Icon name={icon} {...props} />
    }

    return (
        <UIListItem
            style={{
                minHeight: 65,
                maxHeight: 65,
                borderBottomEndRadius: isLastItem ? 10 : 0,
                borderTopEndRadius: isFirstItem ? 10 : 0,
                borderTopStartRadius: isFirstItem ? 10 : 0,
                borderBottomStartRadius: isLastItem ? 10 : 0
            }}
            onPress={() => {
                onPress();
            }}
            title={(props) => {
                return <Text {...props}>{title}</Text>
            }}
            accessoryRight={icon ? Accessory : () => <></>}
        />
    )
}

export default ListItem;