/**
*
* appReducer.js
* 
* @author - Faizal
* @date   - 
*
***/
// REACT NATIVE IMPORT

// ALL SHARED FILES
import * as Constant from '../helper/constant';

export const commonReducer = (state, action) => {
	console.log(action.payload)
	switch (action.type) {
		case Constant.TYPE.LANGUAGE:
			return {
				...state,
				lang: action.payload // LANGUAGE VARIABLE
			}
		case Constant.TYPE.APPBASE:
			return {
				...state,
				data: action.payload // BASE LANGUAGE DATA
			}
		default:
			return state;
	}
}