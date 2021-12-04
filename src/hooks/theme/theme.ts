import { PastleLight, ThemeType } from "@app/themes"

import { useContext, useState } from "react"
import { ThemeContext, ThemeContextState } from "@app/providers";


const useTheme = () => {
    const context = useContext<ThemeContextState>(ThemeContext);
    return context.theme;
}

const setTheme = () => {
    const context = useContext(ThemeContext);
    return context.changeTheme;
}


const useColorValue = (colorName: string) => {
    const theme = useTheme();
    let value = theme[colorName];
   console.log(value);
   
    while (value.indexOf('$') >= 0) {
        value = theme[value.replace('$', '')];
    }
    return value;
}

export { useTheme, setTheme, useColorValue }