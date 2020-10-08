import {createContext} from 'react';

const LanguageContext = createContext({
	lang: 'en',
	updateLanguage: (lang) => {}
});

export default LanguageContext;