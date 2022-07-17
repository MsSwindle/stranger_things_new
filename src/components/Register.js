
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { CssBaseline, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;


async function registerUser(username, password) {
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
		sessionStorage.setItem('token', JSON.stringify(token));
		setToken(token);
        history('/UserPage')
        alert("You have registered an account!")
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
               Please Register Here.
            </Typography>
			<Box component='form' onSubmit={handleSubmit}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='outlined-required'
					label='Enter Username'
					value={username}
					onChange={(e) => setUserName(e.target.value)}>
					</TextField>
				<TextField
                  margin='normal'
                  required
                  fullWidth
                  id='outlined-required'
                  label='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}></TextField>
				  <Button
                  type='submit'
                  fullWidth
                  variant='contained'
				  color='inherit'
                  sx={{ mt: 3, mb: 2 }}>
                  Register
               </Button>
			</Box>
			</Box>
		</Container>
	);
}

export default Register;
