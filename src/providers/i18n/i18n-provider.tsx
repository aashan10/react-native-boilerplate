import { LanguageMap } from '@app/i18n';
import React, { createContext, useState } from 'react';
import LanguageInterface from 'src/i18n/language-interface';

interface LanguageContextState {
    language: LanguageInterface,
    setLanguage: (code: string) => void
}

const LanguageContext = createContext<LanguageContextState>({
    language: LanguageMap['en_US'],
    setLanguage: (code: string) => { }
});


const LanguageProvider = ({ children }: { children: React.ReactElement }) => {
    const [language, setLanguage] = useState<LanguageInterface>(LanguageMap['en_US']);
    return (
        <LanguageContext.Provider value={{
            language: language,
            setLanguage: (code: string) => {
                if (LanguageMap[code]) {
                    setLanguage(LanguageMap[code]);
                }
            }
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageProvider }
export type { LanguageContextState }