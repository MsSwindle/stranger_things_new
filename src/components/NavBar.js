import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Search from './Search';
import Link from '@mui/joy/Link';

const NavBar = ({ token, posts, setPosts, username, setPostsToDisplay }) => {
	return (
			<Box sx={{ flexGrow: 1}}>
				<AppBar position="static"
                sx={{ backgroundColor: '#009688',
                    margin: '1.5px',
                    boxShadow: '5px 5px grey', }}>
					<Toolbar>
						<Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1
                            }}>
                            Stranger's Things
						</Typography>
                        <Search
                            token={token}
                            posts={posts}
                            setPost={setPosts}
                            setPostsToDisplay={setPostsToDisplay}
                        />
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
								<Button href="/UserPage" color="inherit">
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
	);
};

export default NavBar;
