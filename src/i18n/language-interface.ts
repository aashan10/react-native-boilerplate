interface LanguageInterface extends Record<string, any> {
    name: string;
    code: string;
    emoji: string;
    settings: {
        title: string;
        language: {
            title: string;
        }
        theme: {
            title: string
        }
    };
    cart: {

    };
}

export default LanguageInterface;
