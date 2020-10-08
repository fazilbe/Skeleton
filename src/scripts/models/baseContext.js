import {createContext} from 'react';

const BaseContext = createContext({
	data: {},
	config: {},
	updateBase: (base) => {}
});

export default BaseContext;