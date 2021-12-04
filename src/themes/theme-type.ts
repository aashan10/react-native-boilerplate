export default interface ThemeType extends Record<string, any> {
    name: string,
    accent: 'light' | 'dark'
}