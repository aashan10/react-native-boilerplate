
import en_US from "./en_US/en_US";
import ne from "./ne/ne";
import LanguageInterface from "./language-interface";

const LanguageMap: Record<string, LanguageInterface> = {
    en_US: en_US,
    ne: ne
}

export default LanguageMap;