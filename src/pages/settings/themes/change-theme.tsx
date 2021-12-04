import { Body, Button, Header, ListItem } from '@app/components';
import { setTheme, useColorValue, useTheme, useTranslation } from '@app/hooks';
import { ThemeMap } from '@app/themes';
import { Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';

const ChangeTheme = () => {
    const themes = Object.keys(ThemeMap);
    const t = useTranslation();
    const changeTheme = setTheme();
    const currentTheme = useTheme();
    const successColor = useColorValue('color-success-default')

    const ThemeItem = ({ item, index }: { item: string, index: number }) => {

        return <ListItem
            isFirstItem={themes.indexOf(item) === 0}
            isSelected={item === currentTheme.name}
            isLastItem={themes.indexOf(item) === themes.length - 1}
            onPress={() => {
                changeTheme(item)
            }}
            key={index}
            icon={ThemeMap[item].name === currentTheme.name ? 'checkmark-circle-2' : false}
            title={t(ThemeMap[item].name)}

        />;
    }

    return (
        <Layout level={'4'}>
            <Header back title={t('settings.theme.title')} />

            <Body>
                {
                    themes.map((theme, index) => {
                        return (
                            <ThemeItem item={theme} index={index} />
                        )
                    })
                }
            </Body>

        </Layout>
    )
}

export default ChangeTheme;