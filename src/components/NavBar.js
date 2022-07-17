import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Search from './Search';

const NavBar = ({ token, posts, setPosts, username }) => {
	return (
		<>
			<Box sx={{ flexGrow: 1}}>
				<AppBar position="static"
                sx={{ backgroundColor: '#009688',
                    boxShadow: '5px 5px grey', }}>>
					<Toolbar>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1
                            }}>
                            Stranger Things
						</Typography>
						<Button href="/Homepage" color="inherit">
							Home
						</Button>
						{!token ? (
							<>
								<Button href="/Register" color="inherit">
									Register
								</Button>
								<Button href="/Login" color="inherit">
									Login
								</Button>
							</>
						) : (
							<>
								<Search
									token={token}
									posts={posts}
									setPost={setPosts}
								/>
								<Button href="/Userpage" color="inherit">
									Profile
								</Button>
								<Button href="/Inbox" color="inherit">
									Inbox
								</Button>
								<Button href="/Create" color="inherit">
									Create a Post
								</Button>
								<Button href="/Logout" color="inherit">
									Logout
								</Button>
							</>
						)}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default NavBar;
