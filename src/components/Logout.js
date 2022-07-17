import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Logout = ({ token, setToken }) => {
	const history = useNavigate();
	const handleLogout = async () => {
		setToken('');
		sessionStorage.removeItem('token');
		history('/HomePage');
	};
	return (
		<Card
			variant="outlined"
			sx={{
				display: 'flex',
				backgroundColor: '#80cbc4',
				marginTop: '10px',
				boxShadow: '5px 5px grey',
			}}
		>
			<CardContent sx={{ flex: 1 }} key="logout">
				<Typography component="h2" variant="h5">
					Are you sure you want to log out?
				</Typography>
				<Button
					variant="outlined"
					color="inherit"
					onClick={handleLogout}
				>
					Log out
				</Button>
				<Button
					variant="outlined"
					color="inherit"
					onClick={() => history(-1)}
				>
					Go Back
				</Button>
			</CardContent>
		</Card>
	);
};

export default Logout;
