import { Body, Header, ListItem } from '@app/components';
import { useTranslation } from '@app/hooks';
import { Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';

interface SettingProps {
    navigation: any
}

const Settings = ({ navigation }: SettingProps) => {

    const t = useTranslation();

    return (
        <Layout level={'4'}>
            <Header title={t('settings.title')} />
            <Body>

                <ListItem
                    isFirstItem={true}
                    onPress={() => {
                        navigation.push('change-theme')
                    }}
                    title={t('settings.theme.title')}
                    icon={'chevron-right-outline'} />
                <ListItem
                    isLastItem={true}
                    onPress={() => {
                        navigation.push('change-language')
                    }}
                    title={t('settings.language.title')}
                    icon={'chevron-right-outline'} />
            </Body>
        </Layout>
    )
}

export default Settings;