import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Search = ({ token, posts, setPostsToDisplay }) => {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const filteredPosts =
			posts.length &&
			posts.filter((post) => postMatches(post, searchTerm));
		const postsToDisplay = searchTerm.length ? filteredPosts : posts;
		setPostsToDisplay(postsToDisplay);
	}, [searchTerm]);

	function postMatches(post, text) {
		if (post.title.includes(searchTerm)) {
			return true;
			}
		if (post.description.includes(searchTerm)) {
			return true;	
		}
		if (post.location.includes(searchTerm)) {
			return true;
			}	
		if (post.price.includes(searchTerm)) {
				return true;
		}else {
			return false;
		}
	}


	return (
		<Container component="SearchContainer">
			<Box
            sx={{
               display: 'flex',
               flexDirection: 'row',
               alignItems: 'center',
            }}>
				<TextField
					margin='normal'
					fullWidth
					label='Search'
					type= 'text'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					></TextField>
				</Box>
				<Box
				sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: ''
			 	}}> 
				<Button type='submit'
                  fullWidth
				variant='contained'
				color='inherit'
				sx={{ mt: 1, mb: 1 }}>
					Submit
				</Button>
				</Box>
		</Container>
	);
};

export default Search;
