import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { CssBaseline, Typography } from '@mui/material';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Create = ({ token, posts, setPosts }) => {
	const [title, setTitle] = useState([]);
	const [description, setDescription] = useState([]);
	const [price, setPrice] = useState('');
	const [location, setLocation] = useState('');
	const history = useNavigate();

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		console.log(token);
		const response = await fetch(`${APIURL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				post: {
					title,
					description,
					price,
					location,
				},
			}),
		});
		const result = await response.json();
		console.log('result', result);
		setPosts([result.data.post, ...posts]);
		history('/UserPage');
		setTitle('');
		setDescription('');
		setLocation('');
		setPrice('');
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h4">
					Create a New Post
				</Typography>
				<Box component="form" onSubmit={handleSubmit}>
					<TextField
						margin="normal"
						type="text"
						fullWidth
						id="outlined"
						label="Title"
						value={title}
						onChange={(ev) => setTitle(ev.target.value)}
					></TextField>
					<TextField
						margin="normal"
						type="text"
						fullWidth
						id="outlined"
						label="Description"
						value={description}
						onChange={(ev) => setDescription(ev.target.value)}
					></TextField>
					<TextField
						margin="normal"
						type="text"
						fullWidth
						label="Price"
						value={price}
						onChange={(ev) => setPrice(ev.target.value)}
					></TextField>
					<TextField
						margin="normal"
						type="text"
						fullWidth
						label="Location"
						value={location}
						onChange={(ev) => setLocation(ev.target.value)}
					></TextField>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="inherit"
						sx={{ mt: 3, mb: 2 }}
					>
						Submit
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Create;
