import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


async function loginUser(username, password) {
	return fetch(`${APIURL}/users/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			user: {
				username: username,
				password: password
			}
		})
	})
		.then((response) => response.json())
		.then((result) => {
			console.log(result);
			return result.data.token;
		})
		.catch(console.error);
}

function Login({ setToken, username, password, setPassword, setUserName}) {
    const history = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
        try{
		const token = await loginUser(username, password);
        if(token){
        sessionStorage.setItem("token", JSON.stringify(token))
		setToken(token);
        history('/HomePage')
        alert("You have logged in!")
        }else {
            alert("Incorrect information")
        }
        }catch (error){
            alert(error.message)
        }

	};
	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<h1>Please Log In</h1>
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

export default Login;
