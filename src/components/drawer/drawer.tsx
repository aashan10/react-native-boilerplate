import { Layout, ListItem, Text } from '@ui-kitten/components';
import { FlatList } from 'react-native'
import React from 'react';
import { useTranslation } from '@app/hooks';

const Drawer = (props: any) => {
    const t = useTranslation();
    return (
        <>
            <Layout level={'1'} style={{ height: '100%' }}>

                <FlatList style={{ marginTop: 50 }} data={props.state.routes} renderItem={(item: {
                    item: {
                        name: string,
                        key: string
                    }
                }) => {
                    return (
                        <>
                            <ListItem
                                title={t(item.item.name)}
                                onPress={() => {
                                    props.navigation.navigate({ key: item.item.key })
                                }}>
                            </ListItem>
                        </>
                    )
                }} />
            </Layout>
        </>
    )
}

export default Drawer;