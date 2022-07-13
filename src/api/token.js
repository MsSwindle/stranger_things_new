import { APIURL } from '..';

const getToken = () => {
	const tokenString = localStorage.getItem('token');
	const userToken = JSON.parse(tokenString);
	console.log('userToken', userToken);
	return userToken?.token;
};