/**
*
* api.js
* Handle API Service
*
* @author - Faizal
* @date   - 24 April 2020
*
***/

/**
* Post API
*
* @input  String URL
* @input  String Body
* @return NA
*/
export const post = ({URL, body}) => {
	return new Promise((resolve, reject) => {
		// FETCH REQUEST
		fetch(URL, {
			method: 'POST', // or 'PUT'
	      	body: JSON.stringify(body),
			headers: {
		        'Cache-Control': 'no-cache'
		    }
		})
		.then((response) => response.json())
		.then((data) => {
			resolve(data);
		}).catch((error) => {
			console.log(error);
			reject(error);
		});
	});	
};

/**
* Get API
*
* @input  String URL
* @return NA
*/
export const get = ({URL}) => {
	return new Promise((resolve, reject) => {
		// FETCH REQUEST
		fetch(URL, {
			headers: {
				'Cache-Control': 'no-cache'
			}
		})
		.then((response) => response.json())
		.then((data) => {
			// SAVE THE PROMISE RESOLVE
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
	});	
};


/**
* Get API
*
* @input  String URL
* @return NA
*/
export const local = (jsonPath) => {
	return new Promise((resolve, reject) => {
		// FETCH REQUEST
		fetch(jsonPath, {
			headers: {
				'Cache-Control': 'no-cache'
			}
		})
		.then((response) => response.json())
		.then((data) => {
			// SAVE THE PROMISE RESOLVE
			resolve(data);
		}).catch((error) => {
			reject(error);
		});
	});	
};