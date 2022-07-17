import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import Create from './Create';
// import Update from './Update';

const cohortName = '2204-ftb-et-web-pt';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

const UserPage = ({token, username, postId, setPostId}) => {
	const history =useNavigate();
    const [posts, setPosts] = useState([]);
	

	useEffect(() => {
		const fetchPosts = async () => {
			console.log(token)
			const response = await fetch(`${APIURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
            },
		});
			const result = await response.json();
			console.log(result)
			if (result) {
				const activePost = result.data.posts.filter(
					(post) => post.active === true)
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
				'Authorization': `Bearer ${token}`,
            }
		});
		const result = await response.json();
		if (result) {
			const newPosts = posts.filter(
				(post) => post._id !== postIdToDelete
				);
				console.log(newPosts)
				
			setPosts(newPosts);
		}
	};

	const handleClick = async (post) => {
		setPostId(post._id);
		history('/Update');
        
	}



	return (
        <div>
			<header>
             <h2>{username}'s Profile</h2>
			</header> 
				{posts.map((post) => (
					<div key={post._id}>
						<h3>{post.title}</h3>
						<div>{post.description}</div>
                        <div>{post.location}</div>
                        <div>{post.price}</div>
                        <div>{post.willDeliver}</div>
						<button
							type="button"
							className="btnEdit"
							onClick={handleClick}
							>
							Edit
						</button>
						<button
							type="button"
							className="btnDelete"
							onClick={() => handleDelete(post._id)}
						>
							Delete
						</button>
					</div>
				))}

        </div>
    )
};


export default UserPage;
