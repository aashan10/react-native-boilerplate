import { Body, Button, Header, ListItem } from '@app/components';
import { setLanguage, useLanguage, useTheme, useTranslation } from '@app/hooks';
import { LanguageMap } from '@app/i18n';
import { Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';


const ChangeLanguage = () => {
    const languages = Object.keys(LanguageMap);
    const t = useTranslation();
    const changeLanguage = setLanguage();
    const currentLanguage = useLanguage();
    const theme = useTheme();

    const LanguageItem = ({ item, index }: { item: string, index: number }) => {

        return <ListItem
            isSelected={item === currentLanguage.code}
            isLastItem={languages.indexOf(item) === languages.length - 1}
            isFirstItem={languages.indexOf(item) === 0}
            onPress={() => {
                changeLanguage(item)
            }}
            title={`${LanguageMap[item].emoji} ${LanguageMap[item].name}`}
            icon={LanguageMap[item].name === currentLanguage.name ? 'checkmark-circle-2' : false} />;
    }
    return (
        <Layout level={'4'}>
            <Header back title={t('settings.language.title')} />
            <Body>
                {
                    languages.map((item, index) => {
                        return (
                            <LanguageItem item={item} key={index} index={index} />
                        )
                    })
                }
            </Body>
        </Layout>
    )
}

export default ChangeLanguage;