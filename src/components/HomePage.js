import React, {useState, useEffect} from 'react';
import Msg from './Msg';
import Search from './Search';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const HomePage = ({token}) => {

    const [posts, setPosts] = useState([]);
	const [postId, setPostId] = useState(null);
	

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`${APIURL}/posts`);
			const result = await response.json();
			setPosts(result.data.posts);
		};
		fetchPosts();
	}, []);

	return (
        <div>
             <h2>Homepage</h2>
			 < Search token={token} posts={posts} setPost={setPosts}/>
    <h1 className="Post"> Posts </h1>	

				{posts.map((post) => (
					<div key={post._id}>
						<h3>{post.title}</h3>
						<div>{post.description}</div>
                        <div>{post.location}</div>
                        <div>{post.price}</div>
                        <div>{post.willDeliver}</div>
						{token ? (
					<Msg token ={token} postId={post._id} />
				) : ("Login to Message poster.")}
					</div>
				))}

        </div>
    )
};

export default HomePage;
