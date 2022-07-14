import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


async function registerUser(username, password) {
    console.log(username)
	return fetch(`${APIURL}/users/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: {
				username: username,
				password: password,
			},
		}),
	})
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
            return result;
		})
		.catch(console.error);
}

function Register({ setToken, setUserName, setPassword, username, password}) {
    const history =useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await registerUser(
			username,
			password
		);
		const token = data.data.token;
		console.log('data', data);
		console.log('token', token);
		console.log('setToken', setToken);
		localStorage.setItem('token', JSON.stringify(token));
		setToken(token);
        history('/UserPage')
        alert("You have registered an account!")
	};

	return (
		<div className="register-container">
			<form onSubmit={handleSubmit}>
				<h1>Please Register</h1>
				<label>
					<p>Username</p>
					<input
						type="text"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</label>
				<label>
					<p>Password</p>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Register;
