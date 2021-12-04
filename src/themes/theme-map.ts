import PastleLight from "./pastle/pastle-light";
import ThemeType from "./theme-type";
import * as eva from '@eva-design/eva';
import MaterialDark from "./material/dark";

const ThemeMap: Record<string, ThemeType> = {
    'Pastle Light': PastleLight,
    'Eva Dark': { ...eva.dark, name: 'Eva Dark', accent: 'dark' },
    'Eva Light': { ...eva.light, name: 'Eva Light', accent: 'light' },
    'Material Dark': MaterialDark
}

export default ThemeMap;