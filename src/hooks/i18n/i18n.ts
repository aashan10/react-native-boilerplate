import { LanguageContext } from '@app/providers';
import { useContext } from 'react';
import LanguageInterface from 'src/i18n/language-interface';

const useLanguage = (): LanguageInterface => {
    const { language } = useContext(LanguageContext);
    return language;
}

const useTranslation = (): CallableFunction => {
    const language = useLanguage();

    const t = (key: string) => {
        const tree = key.split('.');
        let index = 0;
        let resultingObject = language;
        while (tree[index]) {
            // @ts-ignore
            if (resultingObject[tree[index]] !== undefined) {
                // @ts-ignore
                resultingObject = resultingObject[tree[index]];
                index++;
            } else {
                return key;
            }
        }

        if (typeof resultingObject === 'string') {
            return resultingObject;
        }
        if (typeof resultingObject['title'] === 'string') {
            return resultingObject['title'];
        }
        return key;
    }

    return t;
}

const setLanguage = () => {
    const context = useContext(LanguageContext);
    return context.setLanguage;
}

export { useLanguage, useTranslation, setLanguage }