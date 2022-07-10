import { APIURL } from '..';

const getToken = () => {
	const tokenString = localStorage.getItem('token');
	const userToken = JSON.parse(tokenString);
	console.log('userToken', userToken);
	return userToken?.token;
};
// console.log('Token in App.js', token);

// if (!token) {
// 	console.log("Im hitting else if");
// }
