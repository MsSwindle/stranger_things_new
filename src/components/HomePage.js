import React, {useState, useEffect} from 'react';
import Msg from './Msg';
import Search from './Search';
import { CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';



const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const HomePage = ({token, posts, setPosts,setPostsToDisplay, postId, setPostId}) => {

	// const [postId, setPostId] = useState(null);
	

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`${APIURL}/posts`,{
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
			}
			);

			const result = await response.json();
			setPosts(result.data.posts);
			setPostsToDisplay(result.data.posts);
		};
		fetchPosts();
	}, [token]);

	return (
		<>
        <Grid 
		container
		direction="column"
		justifyContent="space-evenly"
		alignItems="stretch"
		spacing={{xs:2, md:3}}
		columns={{xs:4, sm:8, md:12}}>
			
			<Container
			sx={{
				padding: '10px',
			}}>

		 <Search
                            token={token}
                            posts={posts}
                            setPost={setPosts}
                            setPostsToDisplay={setPostsToDisplay}
							/>
			</Container>
				{posts.map((post) => (
				<Grid key={post._id} item xs={12} md={6} sm={4}>
				<Card
				variant='outlined'
				sx={{
				   display: 'flex',
				   margin: '10px',
				   backgroundColor: '#80cbc4',
				   boxShadow: '5px 5px grey',
				}}> 
					<CardContent sx={{ flex: 1 }}>
                        <Typography component='h2' variant='h5'>
                           {' '}
                           {post.title}
                        </Typography>
                        <Typography variant='subtitle1'>
                           {post.description}
                        </Typography>
                        <Typography variant='subtitle2'>
                           {post.location}
                        </Typography>
						<Typography variant='subtitle2'>
                           {post.price}
                        </Typography>
						<Typography variant='subtitle2'>
                         {post.willDeliver}
                        </Typography>
                     </CardContent>
						<CardActions>
							{post.isAuthor ? null : token ? (
								<Msg token ={token} postId={post._id} />
								) : ("Login to Message poster.")}
						</CardActions>
					
					</Card>
					</Grid>
				))}

        </Grid>
		</>
    )
};

export default HomePage;
