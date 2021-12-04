import { PastleLight, ThemeMap, ThemeType } from "@app/themes";
import React, { createContext, useState } from "react";
import { Alert } from "react-native";

interface ThemeContextState {
    theme: ThemeType,
    changeTheme: (themeName: string) => void
}

const ThemeContext = createContext<ThemeContextState>({
    theme: PastleLight,
    changeTheme: (themeName: string) => {}
});

const ThemeProvider = (props: { children: React.ReactElement }) => {
    const [theme, setTheme] = useState<ThemeType>(ThemeMap['Eva Dark']);

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            changeTheme: (themeName: string) => {
                if (ThemeMap[themeName]) {
                    setTheme(ThemeMap[themeName]);
                } else {
                    Alert.alert('Theme not available')
                }
            }
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeConsumer, ThemeContext, ThemeProvider }
export type { ThemeContextState }
