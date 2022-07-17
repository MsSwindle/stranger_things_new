import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const Inbox = ({ token, posts, username }) => {
	const [allMessage, setAllMessage] = useState([]);

	useEffect(() => {
		const fetchMsg = async () => {
			console.log(token);
			const response = await fetch(`${APIURL}/users/me`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const result = await response.json();
			console.log(result);
			setAllMessage(result.data.messages);
		};
		fetchMsg();
	}, [token]);

	return (
		<Grid
			container
			direction="column"
			justifyContent="space-evenly"
			alignItems="stretch"
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			{allMessage.map((message) => (
				<Grid key={message.post._id} item xs={12} md={6} sm={4}>
					<Card
						variant="outlined"
						sx={{
							display: 'flex',
							backgroundColor: '#80cbc4',
							boxShadow: '5px 5px grey',
						}}
					>
						<CardContent sx={{ flex: 1 }}>
							<Typography component="h2" variant="h5" id="sender">
								Sender: {message.fromUser.username}
							</Typography>
							<Typography variant="subtitle1">
								Post Title:{message.post.title}
							</Typography>
							<Typography variant="subtitle2">
								Message:{message.content}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default Inbox;
