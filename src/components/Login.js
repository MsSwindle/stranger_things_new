import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { CssBaseline, Typography } from '@mui/material';



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
        history('/UserPage')
        alert("You have logged in!")
        }else {
            alert("Incorrect information")
        }
        }catch (error){
            alert(error.message)
        }

	};
	return (
		<Container component='main' maxWidth='xs'>
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}>
			<Typography component='h1' variant='h4'>
               Please Login
            </Typography>
			<Box component='form' onSubmit={handleSubmit}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='outlined'
					label='Enter Username'
					type='text'
					value={username}
					onChange={(e) => setUserName(e.target.value)}>
				</TextField>
				<TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Password'
                  type='text'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}></TextField>
				<Button
                  type='submit'
                  fullWidth
                  variant='contained'
				  color='inherit'
                  sx={{ mt: 3, mb: 2 }}>
                  Login
               </Button>
			</Box>
			</Box>
		</Container>
	);
}

export default Login;
