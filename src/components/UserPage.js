import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const UserPage = ({ token, username, postId, setPostId }) => {
	const history = useNavigate();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			console.log(token);
			const response = await fetch(`${APIURL}/users/me`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const result = await response.json();
			console.log(result);
			if (result) {
				const activePost = result.data.posts.filter(
					(post) => post.active === true
				);
				setPosts(activePost);
			}
		};
		fetchPosts();
	}, [token]);

	const handleDelete = async (postIdToDelete) => {
		console.log('postIdToDelete', postIdToDelete);
		const response = await fetch(`${APIURL}/posts/${postIdToDelete}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		const result = await response.json();
		if (result) {
			const newPosts = posts.filter(
				(post) => post._id !== postIdToDelete
			);
			console.log(newPosts);

			setPosts(newPosts);
		}
	};

	const handleClick = async (post) => {
		setPostId(post._id);
		history('/Update');
	};

	return (
		<Grid
			container
			direction="column"
			justifyContent="space-evenly"
			alignItems="stretch"
			spacing={{ xs: 12, md: 13 }}
			columns={{ xs: 3, sm: 4, md: 20 }}
		>
			{posts.map((post) => (
				<Grid item xs={12} md={6} sm={4}>
					<Card
						variant="outlined"
						sx={{
							display: 'flex',
							backgroundColor: '#80cbc4',
							boxShadow: '5px 5px grey',
						}}
					>
						<CardContent sx={{ flex: 1 }} key={post._id}>
							<Typography component="h2" variant="h5">
								{' '}
								{post.title}
							</Typography>
							<Typography variant="subtitle1">
								{post.description}
							</Typography>
							<Typography variant="subtitle2">
								{post.location}
							</Typography>
							<Typography variant="subtitle2">
								{post.price}
							</Typography>
							<Typography variant="subtitle2">
								{post.willDeliver}
							</Typography>
						</CardContent>
						<CardActions>
							<Button
								type="button"
								className="btnEdit"
								onClick={handleClick}
							>
								Edit
							</Button>
							<Button
								type="button"
								className="btnDelete"
								onClick={() => handleDelete(post._id)}
							>
								Delete
							</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default UserPage;
